<template>
  <v-app>
    <!-- input image, change src path if needed -->
    <img ref="input_img" style="top: -10000px; position: fixed;" @load="init" src="@/test/1621239966.jpg"/>
    <v-container style="background-color: #1c7430;">
      <v-row justify="center">
        <p class="text-center text-h4 my-2">Input Image</p>
      </v-row>
      <v-row justify="center">
        <canvas ref="img" width="320" height="320"></canvas>
      </v-row>
      <v-row justify="center">
        <v-col>
        </v-col>
        <v-col class="text-center">
          <p>Top Left Corner</p>
          <p>Corner : {{tl_cursor}}</p>
          <p>Mean : {{tl_mean}}</p>
          <canvas ref="tl" width="60" height="60"></canvas>
        </v-col>
        <v-col class="text-center">
          <p>Top Right Corner</p>
          <p>Corner : {{tr_cursor}}</p>
          <p>Mean : {{tr_mean}}</p>
          <canvas ref="tr" width="60" height="60"></canvas>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
        </v-col>
        <v-col class="text-center">
          <p>Bottom Left Corner</p>
          <p>Corner : {{bl_cursor}}</p>
          <p>Mean : {{bl_mean}}</p>
          <canvas ref="bl" width="60" height="60"></canvas>
        </v-col>
        <v-col class="text-center">
          <p>Bottom Right Corner</p>
          <p>Corner : {{br_cursor}}</p>
          <p>Mean : {{br_mean}}</p>
          <canvas ref="br" width="60" height="60"></canvas>
        </v-col>
        <v-col>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cornerSize: 30,
      gaussianRadius: 3,
      gaussCoefficient: [],
      canvas: document.createElement('canvas'),
      tl_cursor: 0,
      tr_cursor: 0,
      bl_cursor: 0,
      br_cursor: 0,
      tl_mean: 0,
      tr_mean: 0,
      bl_mean: 0,
      br_mean: 0
    }
  },
  methods: {
    rectangleDetector(image, pos){
      let w = image.width;
      let h = image.height;
      let imgData = image.data;
      let surface= new Array(w+h-1).fill(0);
      let grayscaleData = new Array(imgData.length/4);
      let boundary = w/5;
      for (let i=0; i<imgData.length; i+=4) {
        grayscaleData[i/4] = Math.round(imgData[i]*0.2989+imgData[i+1]*0.587+imgData[i+2]*0.114);
      }
      let mean = grayscaleData.reduce((a, b) => a + b, 0) / grayscaleData.length;
      let sd = Math.sqrt(grayscaleData.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / grayscaleData.length);
      let binaryData = grayscaleData.map(d => d > mean ? 0 : 1);
      if(mean < 16){
        console.log(pos + " too dim");
        return -100;
      }
      if(mean > 239){
        console.log(pos + " too bright");
        return -10;
      }
      if(sd < 20){
        console.log(pos + " no content");
        return -999;
      }
      if (pos==='tl') {
        this.tl_mean = mean;
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[y + x] += binaryData[yw + x];
          }
        }
      } else if (pos==='tr') {
        this.tr_mean = mean;
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[w - 1 - x + y] += binaryData[yw + x];
          }
        }
      } else if (pos==='bl') {
        this.bl_mean = mean;
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[surface.length - w + x - y] += binaryData[yw + x];
          }
        }
      } else if (pos==='br') {
        this.br_mean = mean;
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[surface.length - y - x - 1] += binaryData[yw + x];
          }
        }
      }
      for (let cursor=boundary; cursor<surface.length-boundary; cursor++) {
        if (surface[cursor] === 1) {
          console.log(pos + " has corner ,cursor : "+cursor);
          return cursor;
        }
      }
      console.log(pos + " hasn't corner");
      return -1;
    },
    drawCursor(img, cursor, pos){
      let arr = img.data;
      let wh = img.width;
      if (cursor<0) {
        return
      }
      if (pos==='tl' || pos==='br') {
        for (var i=0; i<arr.length; i+=4) {
          var y = Math.floor(i/4/wh);
          var x = i/4%wh;
          if ((x+y)===cursor) {
            arr[i] = arr[i+1] = 70;
          }
        }
      } else {
        for (var I=0; I<arr.length; I+=4) {
          var Y = Math.floor(I/4/wh);
          var X = I/4%wh;
          if ((wh-1-X+Y)===cursor) {
            arr[I] = arr[I+1] = 70;
          }
        }
      }
    },
    drawCorner(image){
      const wh = 2*this.cornerSize;
      const imageWH = image.width;
      for (var i=0; i<image.data.length; i+=4) {
        var y = Math.floor(i/4/imageWH);
        var x = i/4%imageWH;
        if (((x===wh-1 || x===imageWH-wh) && (y<wh-1 || y>=imageWH-wh)) || (y===wh-1 || y===imageWH-wh) && (x<wh-1 || x>=imageWH-wh)) {
          image.data[i] = image.data[i+1] = 70;
        }
      }
    },
    lightSpot(image, imageWH){
      let startXY = 50;
      let n = 13;
      let step = 4;

      let lightSpotX = Array.from(Array(imageWH), () => new Array(0));
      let lightSpotY = Array.from(Array(imageWH), () => new Array(0));
      let crop_imageWH = imageWH-2*startXY;

      let offset = (n+1)/2;
      let offsetXY = n+startXY;
      for (let y=startXY; y<crop_imageWH+startXY; y++) { // y-axis
        if (y%step===0){
          let xQueue = [];
          for (let x=startXY; x<crop_imageWH+startXY; x++) { // x-axis
            let i = x+y*imageWH<<2;
            image[i] = image[i+1] = image[i+2] = Math.round(image[i]*0.2989+image[i+1]*0.587+image[i+2]*0.114);
            if(x>=offsetXY){
              let check = true;
              for(let a=0; a<n; a++){
                if(xQueue[a]<223){
                  check = false;
                  break;
                }
              }
              if(check){
                lightSpotX[y].push(x-offset);
              }
              xQueue.shift();
            }
            xQueue.push(image[i]);
          }
        }
      }
      for (let x=startXY; x<crop_imageWH+startXY; x++) { // x-axis
        if(x%step===0){
          let yQueue = [];
          for (let y=startXY; y<crop_imageWH+startXY; y++) { // y-axis
            if(y>=offsetXY){
              let check = true;
              for(let a=0; a<n; a++){
                if(yQueue[a]<223){
                  check = false;
                  break;
                }
              }
              if(check){
                lightSpotY[x].push(y-offset);
              }
              yQueue.shift();
            }
            yQueue.push(image[x+y*imageWH<<2]);
          }
        }
      }
      let result_x = [];
      let result_y = [];
      // Draw Detected Light Spot
      for (let y=0;y<imageWH; y++){ // loop over y-axis
        lightSpotX[y].filter(x => lightSpotY[x].includes(y)).forEach(x => {
          let k = x+y*imageWH << 2;
          image[k] = 0;
          image[k+1] = 0;
          image[k+2] = 255;
          result_x.push(x);
          result_y.push(y);
        });
      }
      let median_x = result_x.sort()[Math.floor(result_x.length/2)];
      let median_y = result_y.sort()[Math.floor(result_y.length/2)];
      for(let x=median_x-4;x<median_x+5; x++){
        image[(x+median_y*imageWH)*4+1] = 60;
      }
      for(let y=median_y-4;y<median_y+5; y++){
        image[(median_x+y*imageWH)*4+1] = 60;
      }
      for(let x=imageWH/2-4;x<imageWH/2+5; x++){
        image[(x+imageWH/2*imageWH)*4] = 255;
        image[(x+imageWH/2*imageWH)*4+1] = 0;
        image[(x+imageWH/2*imageWH)*4+2] = 0;
      }
      for(let y=imageWH/2-4;y<imageWH/2+5; y++){
        image[(imageWH/2+y*imageWH)*4] = 255;
        image[(imageWH/2+y*imageWH)*4+1] = 0;
        image[(imageWH/2+y*imageWH)*4+2] = 0;
      }
    },
    init(){
      this.canvas.width = this.$refs.input_img.width;
      this.canvas.height = this.$refs.input_img.height;
      this.canvas.getContext('2d').drawImage(this.$refs.input_img,0,0);
      const wh = 2*this.cornerSize;
      let imgData = this.canvas.getContext('2d').getImageData(0, 0, this.$refs.input_img.width, this.$refs.input_img.height);
      let tlCornerData = this.canvas.getContext('2d').getImageData(0, 0, wh, wh);
      let trCornerData = this.canvas.getContext('2d').getImageData(this.$refs.input_img.width-wh, 0, wh, wh);
      let blCornerData = this.canvas.getContext('2d').getImageData(0, this.$refs.input_img.height-wh, wh, wh);
      let brCornerData = this.canvas.getContext('2d').getImageData(this.$refs.input_img.width-wh, this.$refs.input_img.height-wh, wh, wh);
      this.tl_cursor = this.rectangleDetector(tlCornerData, 'tl');
      this.tr_cursor = this.rectangleDetector(trCornerData, 'tr');
      this.bl_cursor = this.rectangleDetector(blCornerData, 'bl');
      this.br_cursor = this.rectangleDetector(brCornerData, 'br');
      this.lightSpot(imgData.data, imgData.width);
      this.drawCursor(tlCornerData, this.tl_cursor, 'tl');
      this.drawCursor(trCornerData, this.tr_cursor, 'tr');
      this.drawCursor(blCornerData, this.bl_cursor, 'bl');
      this.drawCursor(brCornerData, this.br_cursor, 'br');
      this.drawCorner(imgData);
      this.$refs.tl.getContext("2d").putImageData(tlCornerData, 0, 0);
      this.$refs.tr.getContext("2d").putImageData(trCornerData, 0, 0);
      this.$refs.bl.getContext("2d").putImageData(blCornerData, 0, 0);
      this.$refs.br.getContext("2d").putImageData(brCornerData, 0, 0);
      this.$refs.img.getContext("2d").putImageData(imgData, 0, 0);
    }
  }
}
</script>

<style scoped>
</style>