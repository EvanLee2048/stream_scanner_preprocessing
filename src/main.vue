<template>     <!--This is a beta prototype of the main project-->
  <v-app>
    <!-- input image, change src path if needed -->
    <v-container style="background-color: #1c7430;">
      <v-row justify="center">
      </v-row>
      <v-row justify="center">
        <v-col class="text-center">
          <p class="text-center text-h4 my-2">Input Image</p>
<!--         <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/Sample 1.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237986.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237992.jpg"/>-->
<!--          <img ref="input_img" alt="light blur image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237993.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621237996.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621238000.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239316.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239347.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239427.jpg"/>-->
<!--          <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239823.jpg"/>-->
<!--           <img ref="input_img" alt="light image" style="width: 320px; height: 320px;" @load="init" src="@/test/1621239824.jpg"/>-->

<!--          <img ref="input_img" alt="mid dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599060.jpg"/>-->
<!--          <img ref="input_img" alt="mid dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599061.jpg"/>-->

<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599074.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599075.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599076.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599077.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599078.jpg"/>-->
<!--          <img ref="input_img" alt="dark image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599079.jpg"/>-->
<!--          <img ref="input_img" alt="dark blur image" style="width: 320px; height: 320px;" @load="init" src="@/test/1626599086.jpg"/>-->


<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410744.jpg"/>-->
<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410746.jpg"/>-->
          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410751.jpg"/>
<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410757.jpg"/>-->
<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410763.jpg"/>-->
<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410764.jpg"/>-->
<!--          <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410765.jpg"/>-->
        </v-col>
        <v-col class="text-center">
          <p class="text-center text-h4 my-2">Processed Image</p>
          <canvas ref="img" width="1079" height="1110"></canvas>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
        </v-col>
        <v-col class="text-center">
          <p>Top Left Corner</p>
          <p>Corner : {{tl_cursor}}</p>
          <canvas ref="tl" width="60" height="60"></canvas>
        </v-col>
        <v-col class="text-center">
          <p>Top Right Corner</p>
          <p>Corner : {{tr_cursor}}</p>
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
          <canvas ref="bl" width="60" height="60"></canvas>
        </v-col>
        <v-col class="text-center">
          <p>Bottom Right Corner</p>
          <p>Corner : {{br_cursor}}</p>
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
      cv: null,
      computing: false,
      type: "image/jpeg",
      quality: 0.80,
      minImageSize: 22000,
    }
  },
  methods: {
    rectangleDetector(image, pos){  //Determine if image is relevant
      let w = image.width;                            
      let h = image.height;
      let surface= new Array(w+h-1).fill(0);    //What is the surface variable representing ?     --->  45 degree line
      let boundary = w/5;        //Looking for edge              //Which boundary is this ?  --->
      let binaryData = image.data.filter((n,idx) => idx%4===0).map(d => d > 127 ? 0 : 1);

      if (pos==='tl') { // surface direction : from top left to bottom right
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[y + x] += binaryData[yw + x];
          }
        }
      } else if (pos==='tr') { // surface direction : from top right to bottom left
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[w - 1 - x + y] += binaryData[yw + x];
          }
        }
      } else if (pos==='bl') { // surface direction : from bottom left to top right
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[surface.length - w + x - y] += binaryData[yw + x];
          }
        }
      } else if (pos==='br') { // surface direction : from bottom right to top left
        for (let y = 0; y < h; y++) {
          let yw = y * w;
          for (let x = 0; x < w; x++) {
            surface[surface.length - y - x - 1] += binaryData[yw + x];
          }
        }
      }
      for (let cursor=boundary; cursor<surface.length-boundary; cursor++) {
        if (surface[cursor] === 0 && surface[cursor+1] > 0 && surface[cursor+1] < 3) {
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
        if (pos==='br') {
          cursor = wh+wh-1 - cursor;
        }
        for (var i=0; i<arr.length; i+=4) {
          var y = Math.floor(i/4/wh);
          var x = i/4%wh;
          if ((x+y)===cursor) {
            arr[i] = arr[i+1] = 70;
          }
        }
      } else {
        if (pos==='bl') {
          cursor = wh+wh-1 - cursor;
        }
        for (var I=0; I<arr.length; I+=4) {
          var Y = Math.floor(I/4/wh);
          var X = I/4%wh;
          if ((wh-1-X+Y)===cursor) {
            arr[I] = arr[I+1] = 70;
          }
        }
      }
    },
    drawCorner(image){ //Drawing the blue line on the corners ----> Scanning for black square on corners
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
          let start = new Date().getTime();
          this.computing = true;
          let mat = this.cv.imread(this.canvas); // load source image into cv
          let dst = new this.cv.Mat();
          this.cv.cvtColor(mat, dst, this.cv.COLOR_RGBA2GRAY, 0);
          mat = dst;

          // TODO : Your opencv image processing here!!!!!!!!
          // https://docs.opencv.org/3.4/d3/dc1/tutorial_basic_linear_transform.html

          //--------------- Brightness and contrast adjustments
          // let alpha = 3; /*< Simple contrast control ,range : 0 to infinite */
          // let beta = 0;    /*< Simple brightness control ,range : -255 to 255 */
          // mat.convertTo(dst, -1, alpha, beta);
          // this.cv.imshow(this.$refs.img, dst); // load cv result to canvas (processed image)

          //--------------- Only applies Brightness adjustments if it makes jpeg data bigger
          let original_jpeg = this.canvas.toDataURL(this.type, this.quality);
          let brightness_adjustment_jpeg = this.$refs.img.toDataURL(this.type, this.quality);
          if(brightness_adjustment_jpeg.length > original_jpeg.length*1.2 &&
              brightness_adjustment_jpeg.length > this.minImageSize){
            mat = dst;
          }
          // this.remoteDecode('contrast adjustments '+alpha);

          //--------------- Histogram solution part
          // let dst = new this.cv.Mat();
          // this.cv.cvtColor(mat, mat, this.cv.COLOR_RGBA2GRAY, 0);
          // this.cv.equalizeHist(mat, dst);
          // this.cv.imshow(this.$refs.img, dst); // load cv result to canvas (processed image)
          // this.remoteDecode('equalizeHist');

          //BINARY INVERSION
          this.cv.threshold(mat, mat, 127, 255, this.cv.THRESH_BINARY);
          let M = this.cv.Mat.ones(7, 7, this.cv.CV_8U);
          this.cv.morphologyEx(mat, mat, this.cv.MORPH_OPEN, M);

          /**
           * 02 September 2021
           * https://docs.opencv.org/4.5.2/d5/daa/tutorial_js_contours_begin.html
           * Contours can be explained simply as a curve joining all the continuous points (along the boundary), having same color or intensity.
           * The contours are a useful tool for shape analysis and object detection and recognition.
           * */
          let contours = new this.cv.MatVector();
          let hierarchy = new this.cv.Mat();
          this.cv.findContours(mat, contours, hierarchy, this.cv.RETR_CCOMP, this.cv.CHAIN_APPROX_SIMPLE);
          let dst2 = this.cv.Mat.zeros(mat.cols, mat.rows, this.cv.CV_8UC3);
          for (let i = 0; i < contours.size(); ++i) {
            /**
             * https://docs.opencv.org/4.5.2/da/dc1/tutorial_js_contour_properties.html
             * Contours can be explained simply as a curve joining all the continuous points (along the boundary), having same color or intensity.
             * The contours are a useful tool for shape analysis and object detection and recognition.
             * */
            let contour = contours.get(i);
            let area = this.cv.contourArea(contour, false);
            /**
             * aspect ratio of width to height of bounding rect of the object
             * we are finding square shape, so expect aspect ratio is about to 1
             * */
            let rect = this.cv.boundingRect(contour);
            let aspectRatio = rect.width / rect.height;

            /**
             * Solidity is the ratio of contour area to its convex hull area
             * filter arbitrary shape objects
             * */
            let hull = new this.cv.Mat();
            this.cv.convexHull(contour, hull, false, true);
            let hullArea = this.cv.contourArea(hull, false);
            let solidity = area / hullArea;

            if(area > 150 && area < 600 && aspectRatio > 0.75 && aspectRatio < 1.5 && solidity > 0.85){
              this.cv.drawContours(dst2, contours, i, new this.cv.Scalar(255,0,0), 1, this.cv.LINE_8, hierarchy, 100);
              console.log(area);
            }
          }
          console.log((new Date().getTime()-start));
          this.cv.imshow(this.$refs.img, dst2);

          const wh = 2*this.cornerSize;
          let tlCornerData = this.$refs.img.getContext('2d').getImageData(0, 0, wh, wh);       //Makes sure browser can handle the image
          let trCornerData = this.$refs.img.getContext('2d').getImageData(this.$refs.img.width-wh, 0, wh, wh);
          let blCornerData = this.$refs.img.getContext('2d').getImageData(0, this.$refs.img.height-wh, wh, wh);
          let brCornerData = this.$refs.img.getContext('2d').getImageData(this.$refs.img.width-wh, this.$refs.img.height-wh, wh, wh);
          this.tl_cursor = this.rectangleDetector(tlCornerData, 'tl');
          this.tr_cursor = this.rectangleDetector(trCornerData, 'tr');
          this.bl_cursor = this.rectangleDetector(blCornerData, 'bl');
          this.br_cursor = this.rectangleDetector(brCornerData, 'br');
          this.drawCursor(tlCornerData, this.tl_cursor, 'tl');
          this.drawCursor(trCornerData, this.tr_cursor, 'tr');
          this.drawCursor(blCornerData, this.bl_cursor, 'bl');
          this.drawCursor(brCornerData, this.br_cursor, 'br');
          this.$refs.tl.getContext("2d").putImageData(tlCornerData, 0, 0);
          this.$refs.tr.getContext("2d").putImageData(trCornerData, 0, 0);
          this.$refs.bl.getContext("2d").putImageData(blCornerData, 0, 0);
          this.$refs.br.getContext("2d").putImageData(brCornerData, 0, 0);
        }
      } else {
        setTimeout(() => {this.opencvCompute()}, 1000);
      }
    },
    remoteDecode(msg){
      const img = this.$refs.img.toDataURL(this.type, this.quality);
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
      this.opencvCompute();
      // let imgData = this.canvas.getContext('2d').getImageData(0, 0, this.$refs.input_img.width, this.$refs.input_img.height);
      // this.lightSpot(imgData.data, imgData.width);
      // this.drawCorner(imgData);
      // this.$refs.img.getContext("2d").putImageData(imgData, 0, 0);
      
    },
  },
}
</script>

<style scoped>
</style>





