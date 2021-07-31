<template>     <!--This is a beta prototype of the main project-->
  <v-app>
    <!-- input image, change src path if needed -->
    <v-container style="background-color: #1c7430;">
      <v-row justify="center">
      </v-row>
      <v-row justify="center">
        <v-col class="text-center">
          <p class="text-center text-h4 my-2">Input Image</p>
         <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/Sample 1.jpg"/>
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237986.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237992.jpg"/>-->
<!--          <img ref="input_img" alt="light blur image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237993.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237996.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621238000.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239316.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239347.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239427.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239823.jpg"/>-->
          <!-- <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239824.jpg"/> -->

<!--          <img ref="input_img" alt="mid dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599060.jpg"/>-->
<!--          <img ref="input_img" alt="mid dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599061.jpg"/>-->

<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599074.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599075.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599076.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599077.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599078.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599079.jpg"/>-->
<!--          <img ref="input_img" alt="dark blur image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599086.jpg"/>-->
        </v-col>
        <v-col class="text-center">
          <p class="text-center text-h4 my-2">Processed Image</p>
          <canvas ref="img" width="320" height="320"></canvas>
        </v-col>
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
import axios from "axios";

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
      br_mean: 0,
      cv: null,
      computing: false,
      type: "image/jpeg",
      quality: 0.80,
    }
  },
  methods: {
    rectangleDetector(image, pos){  //Determine if image is relevant
      let w = image.width;                            
      let h = image.height;
      let imgData = image.data;                                                 //What data is being stored at imgData ?          ---> 
      let surface= new Array(w+h-1).fill(0);                                    //What is the surface variable representing ?     --->  45 degree line
      let grayscaleData = new Array(imgData.length/4);                          //Why is the grayscaleData ---> length/4 ?   ---> Turning into grayscale data
      let boundary = w/5;        //Looking for edge                                                                //Which boundary is this ?  --->
      for (let i=0; i<imgData.length; i+=4) {  
        grayscaleData[i/4] = Math.round(imgData[i]*0.2989+imgData[i+1]*0.587+imgData[i+2]*0.114);
      }
      let mean = grayscaleData.reduce((a, b) => a + b, 0) / grayscaleData.length;
      let sd = Math.sqrt(grayscaleData.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / grayscaleData.length);
      let binaryData = grayscaleData.map(d => d > mean ? 0 : 1);   //if grayscaleData > mean, then grayscaleData = binaryData ?
     
     if(mean < 16){                                                            //The mean determines if the image is too bright or too dim
        console.log(pos + " too dim");   //Irrelevant 
        return -100;
      }
      if(mean > 239){
        console.log(pos + " too bright"); //Irrevelant 
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
    drawCorner(image){                 //Drawing the blue line on the corners ----> Scanning for black square on corners 
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
    lightSpot(image, imageWH){        //imageWH --> the width and height of the image, square so width = height ----> 320
      let startXY = 50;               //Probably the starting point of blue dot
      let n = 13;                     //size of xQueue ---> Consecutive white pixels to declare it as blue spot
      let step = 4;                   //Spacing between the blue dots

      let lightSpotX = Array.from(Array(imageWH), () => new Array(0));   // Making an array with the amount of pixels of image (320px)
      let lightSpotY = Array.from(Array(imageWH), () => new Array(0));
      let crop_imageWH = imageWH-2*startXY; //Value is 220, basically lowering the area of search
      let offset = (n+1)/2;
      let offsetXY = n+startXY;

      for (let y=startXY; y<crop_imageWH+startXY; y++) { // y-axis --> searching y-axis
        if (y%step===0){
          let xQueue = [];
          for (let x=startXY; x<crop_imageWH+startXY; x++) { 
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

      for (let x=startXY; x<crop_imageWH+startXY; x++) {         // x-axis  
        if(x%step===0){
          let yQueue = [];
          for (let y=startXY; y<crop_imageWH+startXY; y++) {     // y-axis
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


      let result_x = [];       //Coordinates of the blue dot
      let result_y = [];

      // console.log(lightSpotX);
      // console.log(lightSpotY);

      // Draw Detected Light Spot
      
      for (let y=0;y<imageWH; y++){ // loop over y-axis    //Blue dot ---> check both x and y axis
        lightSpotX[y].filter(x => lightSpotY[x].includes(y)).forEach(x => {
          let k = x+y*imageWH << 2;
          image[k] = 0;
          image[k+1] = 0;
          image[k+2] = 255;
          
          result_x.push(x);        //push = append in python
          result_y.push(y);
        });
      }

      //!!!!! New Code  --> Bright Spot Detect
      
      var min_y = Math.min(...result_y);
      var max_y = Math.max(...result_y);

      var min_x = Math.min(...result_x);
      var max_x = Math.max(...result_x);

      var area = (max_y - min_y)*(max_x-min_x);
      
      var no_blueDot = result_x.length;
      var density = no_blueDot/area
      
      console.log("Area:" + area, " Blue Dot:" + no_blueDot + " Density:" + density);

      if (density>0.005 && no_blueDot>64){
        console.log("There is a bright spot");
      }
      else{
        console.log("There is no bright spot");
      }

      //!!!! New Code --> Bright Spot Detect


      let median_x = result_x.sort()[Math.floor(result_x.length/2)];  //Purple cursor ---> used to mark the light spot
      let median_y = result_y.sort()[Math.floor(result_y.length/2)];
      for(let x=median_x-4;x<median_x+5; x++){ //Purple
        image[(x+median_y*imageWH)*4+1] = 60;
      }
      for(let y=median_y-4;y<median_y+5; y++){
        image[(median_x+y*imageWH)*4+1] = 60;
      }
      for(let x=imageWH/2-4;x<imageWH/2+5; x++){ //Red
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
    opencvCompute(){
      if(window.cv && window.cv.Mat && !this.cv){
        this.cv = window.cv;
        // console.log('opencv loaded');
      } else if(!this.cv){
        setTimeout(() => {this.opencvCompute()}, 100);
      }

      if(this.cv){
        if(!this.computing){
          this.computing = true;
          let mat = this.cv.imread(this.canvas); // load source image into cv

          // let dst = new this.cv.Mat();

          // TODO : Your opencv image processing here!!!!!!!!
          // https://docs.opencv.org/3.4/d3/dc1/tutorial_basic_linear_transform.html

          //--------------- Brightness and contrast adjustments
          // const start = new Date().getTime();
          // let alpha = 3; /*< Simple contrast control ,range : 0 to infinite */
          // let beta = 0;    /*< Simple brightness control ,range : -255 to 255 */
          // mat.convertTo(mat, -1, alpha, beta);
          // this.cv.imshow(this.$refs.img, mat); // load cv result to canvas (processed image)
          // console.log('contrast adjustments time : ' + (new Date().getTime()-start));
          // this.remoteDecode('contrast adjustments '+alpha);

          //--------------- Histogram solution part
          // let dst = new this.cv.Mat();
          // this.cv.cvtColor(mat, mat, this.cv.COLOR_RGBA2GRAY, 0);
          // this.cv.equalizeHist(mat, dst);
          // this.cv.imshow(this.$refs.img, dst); // load cv result to canvas (processed image)
          // this.remoteDecode('equalizeHist');
          


          //BINARY INVERSION
          let dst = new this.cv.Mat();
          this.cv.threshold(mat, dst, 127, 255, this.cv.THRESH_BINARY);
          // this.cv.imshow(this.$refs.img, dst);
          console.log("Test")
          // mat.delete();
          // dst.delete();
          
          let M = this.cv.Mat.ones(5, 5, this.cv.CV_8U);
          // You can try more different parameters
          this.cv.morphologyEx(dst, dst, this.cv.MORPH_CLOSE, M);
          this.cv.imshow(this.$refs.img, dst);
          // src.delete(); dst.delete(); M.delete();


        }
      } else {
        setTimeout(() => {this.opencvCompute()}, 1000);
        // console.log("opencv not loaded");
      }
    },
    remoteDecode(msg){
      this.canvas.getContext('2d').drawImage(this.$refs.img,0,0);
      const img = this.canvas.toDataURL(this.type, this.quality);
      console.log(msg+' size : '+JSON.stringify(img.length));
      let config = {
        url:`https://dev.gaccai.com/decode`,
        headers: {Authorization: `APPCODE 2519302fc8dc4786b94c03c5409788ce`},
        method: 'post',
        data: {
          connection_id: 'connection_id',
          jpeg_data:  img ? img.replace("data:image/jpeg;base64,", '') + '===' : null,
          version: 'V0',
          mode: "bypass",
          scanner: 'web'
        }
      }
      this.axiosInstance.request(config)
          .then(response => console.log(msg+' decode message : '+JSON.stringify(response.data)))
          .catch(err => console.log(msg+' error : '+JSON.stringify(err)));
    },
    init(){
      this.canvas.width = this.$refs.input_img.width;
      this.canvas.height = this.$refs.input_img.height;
      this.canvas.getContext('2d').drawImage(this.$refs.input_img,0,0);

      this.axiosInstance = axios.create({
        baseURL: '/',
        timeout: 15000
      });
      let imgData = this.canvas.getContext('2d').getImageData(0, 0, this.$refs.input_img.width, this.$refs.input_img.height);
      this.$refs.img.getContext("2d").putImageData(imgData, 0, 0);
      this.remoteDecode('original');
      // const wh = 2*this.cornerSize;
      // let imgData = this.canvas.getContext('2d').getImageData(0, 0, this.$refs.input_img.width, this.$refs.input_img.height);
      // let tlCornerData = this.canvas.getContext('2d').getImageData(0, 0, wh, wh);       //Makes sure browser can handle the image
      // let trCornerData = this.canvas.getContext('2d').getImageData(this.$refs.input_img.width-wh, 0, wh, wh);
      // let blCornerData = this.canvas.getContext('2d').getImageData(0, this.$refs.input_img.height-wh, wh, wh);
      // let brCornerData = this.canvas.getContext('2d').getImageData(this.$refs.input_img.width-wh, this.$refs.input_img.height-wh, wh, wh);
      this.opencvCompute();
      // this.tl_cursor = this.rectangleDetector(tlCornerData, 'tl');
      // this.tr_cursor = this.rectangleDetector(trCornerData, 'tr');
      // this.bl_cursor = this.rectangleDetector(blCornerData, 'bl');
      // this.br_cursor = this.rectangleDetector(brCornerData, 'br');
      // this.lightSpot(imgData.data, imgData.width);
      // this.drawCursor(tlCornerData, this.tl_cursor, 'tl');
      // this.drawCursor(trCornerData, this.tr_cursor, 'tr');
      // this.drawCursor(blCornerData, this.bl_cursor, 'bl');
      // this.drawCursor(brCornerData, this.br_cursor, 'br');
      // this.drawCorner(imgData);
      // this.$refs.tl.getContext("2d").putImageData(tlCornerData, 0, 0);
      // this.$refs.tr.getContext("2d").putImageData(trCornerData, 0, 0);
      // this.$refs.bl.getContext("2d").putImageData(blCornerData, 0, 0);
      // this.$refs.br.getContext("2d").putImageData(brCornerData, 0, 0);
      // this.$refs.img.getContext("2d").putImageData(imgData, 0, 0);
      
    },
  },
}
</script>

<style scoped>
</style>





