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


         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410678.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410679.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410684.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410686.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410693.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410698.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410726.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410732.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410733.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410736.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410744.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410746.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
        <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410751.jpg"/> -->          <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410757.jpg"/> -->         <!--       Output : Satisfactory -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410763.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410764.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410765.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410766.jpg"/> -->         <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410768.jpg"/> -->         <!--       Output : Satisfactory -->
         <!-- <img ref="input_img" alt="full image" style="width: 1079px; height: 1110px;" @load="init" src="@/full_screen_images/1630410782.jpg"/> -->         <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632489635.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632489636.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632489638.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632489639.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490095.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490096.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490097.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490098.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490099.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490100.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490101.jpg"/> -->           <!-- Output : No contour - Interesting case ***-->
          <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490102.jpg"/>           Output : No contour - Interesting case *** -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490103.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490104.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490105.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490106.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490107.jpg"/> -->           <!--       Output : Unsatisfactory - Poor in founding contour -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490108.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632490108.jpg"/> -->           <!-- Output : No contour - Poor Image Quality -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492375.jpg"/> -->           <!--       Output : Satisfactory ***-->

         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492376.jpg"/> -->         <!--       Output : Satisfactory ***-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492377.jpg"/> -->           <!--       Output : Satisfactory -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492378.jpg"/> -->            <!--       Output : Satisfactory -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492379.jpg"/> -->           <!--       Output : Satisfactory-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492380.jpg"/> -->           <!-- Output : No contour - Poor Image Quality-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492381.jpg"/>-->            <!-- Output : No contour - Poor Image Quality-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492382.jpg"/>-->            <!--       Output : Satisfactory -->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492383.jpg"/> -->           <!-- Output : No contour - Poor Image Quality-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492384.jpg"/> -->           <!-- Output : No contour - Poor Image Quality-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492385.jpg"/> -->           <!--       Output : Satisfactory-->
        <!--  <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492386.jpg"/> -->           <!--       Output : Satisfactory-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492387.jpg"/> -->           <!--       Output : Satisfactory-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492388.jpg"/> -->           <!--       Output : Satisfactory-->
         <!-- <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492389.jpg"/> -->           <!--       Output : Unsatisfactory - Cropping Issue -->
<!--          <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492390.jpg"/>-->            <!-- Output : No contour - Poor Image Quality-->
<!--          <img ref="input_img" alt="full image" style="width: 720px; height: 720px;" @load="init" src="@/full_screen_images/1632492391.jpg"/>-->            <!-- Output : No contour - Poor Image Quality-->
       
       
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/1.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/2.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/3.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/4.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/5.jpg"/> -->
       <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/6.jpg"/>
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/7.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/8.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/9.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/10.jpg"/>-->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/11.jpg"/>-->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/12.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/13.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/14.jpg"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/15.jpg"/> -->
       
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/16.png"/>   -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/17.png"/> -->
       <!-- <img ref="input_img" alt="angled image" style="width: 720px; height: 720px;" @load="init" src="@/angled/19.png"/> -->
<!--  -->



        </v-col>
        <v-col class="text-center">
          <p class="text-center text-h4 my-2">Processed Image</p>
          <canvas ref="img" width="1110" height="1110"></canvas>   <!-- Shows the output image, canvas -->
          <canvas ref="img1" width="1110" height="1110"></canvas>  <!-- Shows the output image, canvas -->
          <canvas ref="img2" width="320" height="320"></canvas>    <!-- Shows the output image, canvas -->
          <canvas ref="img3" width="320" height="320"></canvas>    <!-- Shows the output image, canvas -->
         
          <canvas ref="img4_1" width="720" height="720"></canvas>    <!-- Rotation about center on the main image -->
         
         <p class="text-center text-h4 my-2">Processed Image Next</p>

          <canvas ref="img4" width="720" height="720"></canvas>    <!-- Binary Inversed version of img4_1 -->     
          <canvas ref="img5" width="1110" height="1110"></canvas>    <!-- img -->
          
          <canvas ref="img6" width="1110" height="1110"></canvas>    <!-- img1 -->

          
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
      imageSize: 320,
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
    cornerDetect(image, pos){  //Determine if image is relevant
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
      // console.log(pos + " hasn't corner");
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
      } else if(!this.cv){
        setTimeout(() => {this.opencvCompute()}, 100);
      }
      if(this.cv){
        if(!this.computing){
          const canvasCvSize = 480; /** cropped space size */
          const minLineLength = 150;
          const maxLineLength = 400;
          const cropMargin = 30;

          let canvasCv = document.createElement('canvas');
          let canvasCvCtx = canvasCv.getContext('2d');      
          canvasCv.width = canvasCvSize;
          canvasCv.height = canvasCvSize;
          const sxSpace = 50;
          const sySpace = 50;
          
          canvasCvCtx.drawImage(this.canvas,sxSpace,sySpace,canvasCv.width,canvasCv.height,0,0,canvasCv.width,canvasCv.height);

          let start = new Date().getTime();
          this.computing = true;
          let mat = this.cv.imread(canvasCv);    // load source image into cv
          let dst = new this.cv.Mat();           // Creating a new copy of the cv.
          this.cv.cvtColor(mat, dst, this.cv.COLOR_RGBA2GRAY, 0);
          mat = dst;


          //BINARY INVERSION

          this.cv.adaptiveThreshold(mat, mat, 255, this.cv.ADAPTIVE_THRESH_MEAN_C, this.cv.THRESH_BINARY, canvasCvSize/2-1, 0);
          // this.cv.threshold(mat, mat, 127, 255, this.cv.THRESH_BINARY);
          let M = this.cv.Mat.ones(7, 7, this.cv.CV_8U);
          this.cv.morphologyEx(mat, mat, this.cv.MORPH_OPEN, M);

          this.cv.imshow(this.$refs.img, mat);
  
          let contours = new this.cv.MatVector();
          let hierarchy = new this.cv.Mat();
          this.cv.findContours(mat, contours, hierarchy, this.cv.RETR_CCOMP, this.cv.CHAIN_APPROX_SIMPLE);
          let dst2 = this.cv.Mat.zeros(mat.cols, mat.rows, this.cv.CV_8UC3);
          let contourPositions = [];
          let lines = [];
          for (let i = 0; i < contours.size(); ++i) {
 
            let contour = contours.get(i);
            let area = this.cv.contourArea(contour, false);
            let rect = this.cv.boundingRect(contour);
            let aspectRatio = rect.width / rect.height;
            let hull = new this.cv.Mat();
            this.cv.convexHull(contour, hull, false, true);
            let hullArea = this.cv.contourArea(hull, false);
            let solidity = area / hullArea;

            if(area > 20 && area < 400 && aspectRatio > 0.75 && aspectRatio < 1.25 && solidity > 0.75){
              let M = this.cv.moments(contour);
              contourPositions.push({
                x: parseInt(M.m10/M.m00),
                y: parseInt(M.m01/M.m00),
                idx: i
              });
              this.cv.drawContours(dst2, contours, i, new this.cv.Scalar(255,0,0), 1, this.cv.LINE_8, hierarchy, 100)
            }
          }
          for (let i=0; i<contourPositions.length; ++i){
            for (let j=i+1; j<contourPositions.length; ++j){
              let m = (contourPositions[j].y-contourPositions[i].y)/(contourPositions[j].x-contourPositions[i].x);
              let angle = Math.atan(m) * (180/Math.PI);
              //Length condition 
              let distance = ((contourPositions[i].x-contourPositions[j].x)**2 + (contourPositions[i].y-contourPositions[j].y)**2)**0.5;
              if (distance > minLineLength && distance < maxLineLength){
                lines.push({line:[contourPositions[i].idx,contourPositions[j].idx], a: angle, d: distance});
              }
            }
          }
          //Filtering Parallel Lines
          lines = Array.from(new Set(lines.flatMap((l1, i) => {
            let pt11 = contourPositions.find(pos => pos.idx === l1.line[0]);
            let pt12 = contourPositions.find(pos => pos.idx === l1.line[1]);
            return lines.filter((l2, idx) => {
              let pt21 = contourPositions.find(pos => pos.idx === l2.line[0]);
              let pt22 = contourPositions.find(pos => pos.idx === l2.line[1]);
              return (idx!==i && /** not itself */
                      !l1.line.some(r=> l2.line.includes(r)) &&
                      ((pt11.x-pt21.x)**2+(pt11.y-pt21.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt11.x-pt22.x)**2+(pt11.y-pt22.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt12.x-pt21.x)**2+(pt12.y-pt21.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt12.x-pt22.x)**2+(pt12.y-pt22.y)**2)**0.5 > minLineLength && /** contours not too close */
                      (Math.abs(l2.a-l1.a) < 5 || Math.abs(180-Math.abs(l2.a-l1.a)) < 5) && /** about the same angle */
                      Math.abs(l2.d-l1.d) < 10)});/** about the same length */
          })));

          /** draw lines */
          lines.map(l => l.line).forEach(l => {
            let pt1 = contourPositions.find(pos => pos.idx === l[0]);
            let pt2 = contourPositions.find(pos => pos.idx === l[1]);
            this.cv.line(dst2,
                new this.cv.Point(pt1.x, pt1.y),
                new this.cv.Point(pt2.x, pt2.y),
                [0, 0, 255, 255], 1)
          });

          let squareContours = [];
          for(let l1 of lines) {
            /** is perpendicular condition : diagonal about 90 angle (tolerance = 5) */
            let p = Array.from(new Set(lines.filter(l2 => l1.line.some(r => l2.line.includes(r)) &&
                (Math.abs(90 - Math.abs(l1.a - l2.a)) < 5 || Math.abs(270 - Math.abs(l1.a - l2.a)) < 5) &&
                Math.abs(l1.d - l2.d) < 10)));
            if (p.length===2) {
              squareContours.push(...p.flatMap(v => v.line));
              break;
            }
          }
          /** drawContours, remove in production */
          squareContours.forEach(k => this.cv.drawContours(dst2, contours, k, new this.cv.Scalar(0,255,0), 1, this.cv.LINE_8, hierarchy, 100));
          if(squareContours.length === 4){
            /** filter only the 4 corners */
            let squareContourPositions = contourPositions.filter(pos => squareContours.includes(pos.idx));
            let posX = squareContourPositions.map(pos => pos.x).sort((a, b) => a - b);
            let posY = squareContourPositions.map(pos => pos.y).sort((a, b) => a - b);
            let rotateRadian = -lines.filter(l => l.line.every(c => squareContours.includes(c)))
                                     .map(l => l.a * Math.PI / 180)
                                     .sort((a, b) => Math.abs(a) - Math.abs(b))[0];
            let minX =Math.min(...posX) - cropMargin;
            let minY =Math.min(...posY) - cropMargin;
            let cropLength = Math.max(Math.max(...posX)-minX, Math.max(...posY)-minY) + cropMargin;

            let ctx2 = this.$refs.img2.getContext("2d");    // Canvas 2 --> Base Image
            // let ctx3 = this.$refs.img3.getContext("2d");    // Canvas 3 --> Rotated and top of base image 
            let ctx4 = this.$refs.img4.getContext("2d");

            let ctx5 = this.$refs.img4_1.getContext("2d");
            
            ctx2.drawImage(this.canvas, sxSpace+minX,sySpace+ minY, cropLength, cropLength,  0, 0, this.imageSize, this.imageSize);

            // ctx3.drawImage(this.canvas, sxSpace+minX, sySpace+minY, cropLength, cropLength,  0, 0, this.imageSize, this.imageSize); //this.imageSize = 320

            ctx4.drawImage(this.canvas, 0, 0, 720, 720,  0, 0, 720, 720);

            ctx5.drawImage(this.canvas, 0, 0, 720, 720,  0, 0, 720, 720);

            if(rotateRadian > 45 * Math.PI / 180){
              rotateRadian -= 90 * Math.PI / 180;
            } else if(rotateRadian < -45 * Math.PI / 180){
              rotateRadian += 90 * Math.PI / 180;
            }

              //New Code
            
            
            let proxyDistance = (lines[0].d + lines[1].d +lines[2].d + lines[3].d)/4
            let proxysWidth = 1.282*proxyDistance;
            let proxysHeight = 1.282*proxyDistance;
            let translate_x = 360;   //Making rotation about the center
            let translate_y = 360;

            console.log(translate_x, translate_y);


            ctx4.translate(translate_x, translate_y);
            ctx4.rotate(rotateRadian);
            ctx4.translate(-translate_x, -translate_y);

            console.log(squareContourPositions);
            console.log("Proxy Width/Height", proxysWidth, proxysHeight, "Rotate Angle - ", rotateRadian*180/Math.PI);
            
            // ctx4.translate(100,100);
            ctx4.drawImage(this.$refs.img4, 0, 0, 720, 720, 0,0, 720,720);
            ctx5.drawImage(this.$refs.img4, 0, 0, 720, 720, 0,0, 720,720);

            
            this.opencvComputeNext()
            this.remoteDecode('original');

          } else {
            console.log('square not found by contour method, upload center part to server');
          }

          console.log("Time taken - ", (new Date().getTime()-start));
          this.cv.imshow(this.$refs.img1, dst2); 

          /** draw contour index on canvas javascript */
          this.$refs.img1.getContext("2d").font = "14px Arial";
          this.$refs.img1.getContext("2d").fillStyle = "white";
          this.$refs.img1.getContext("2d").textAlign = "center";
          contourPositions.forEach(pos => this.$refs.img1.getContext("2d").fillText(pos.idx, pos.x, pos.y-4));

          const wh = 2*this.cornerSize;
          let tlCornerData = this.$refs.img.getContext('2d').getImageData(0, 0, wh, wh);       //Makes sure browser can handle the image
          let trCornerData = this.$refs.img.getContext('2d').getImageData(this.$refs.img.width-wh, 0, wh, wh);
          let blCornerData = this.$refs.img.getContext('2d').getImageData(0, this.$refs.img.height-wh, wh, wh);
          let brCornerData = this.$refs.img.getContext('2d').getImageData(this.$refs.img.width-wh, this.$refs.img.height-wh, wh, wh);
          this.tl_cursor = this.cornerDetect(tlCornerData, 'tl');
          this.tr_cursor = this.cornerDetect(trCornerData, 'tr');
          this.bl_cursor = this.cornerDetect(blCornerData, 'bl');
          this.br_cursor = this.cornerDetect(brCornerData, 'br');
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

    opencvComputeNext(){    
          
          const canvasCvSize = 480; /** cropped space size */
          const minLineLength = 150;
          const maxLineLength = 400;
          const cropMargin = 30;

          let canvasCv = document.createElement('canvas');
          let canvasCvCtx = canvasCv.getContext('2d');         //Canvas 0 ---> B&W
          canvasCv.width = canvasCvSize;
          canvasCv.height = canvasCvSize;
          const sxSpace = 100;
          const sySpace = 150;
          
          canvasCvCtx.drawImage(this.$refs.img4,sxSpace,sySpace,canvasCv.width,canvasCv.height,0,0,canvasCv.width,canvasCv.height);

          let mat = this.cv.imread(canvasCv);    // load source image into cv
          let dst = new this.cv.Mat();           // Creating a new copy of the cv.
          this.cv.cvtColor(mat, dst, this.cv.COLOR_RGBA2GRAY, 0);
          mat = dst;

          //BINARY INVERSION

          this.cv.adaptiveThreshold(mat, mat, 255, this.cv.ADAPTIVE_THRESH_MEAN_C, this.cv.THRESH_BINARY, canvasCvSize/2-1, 0);
          // this.cv.threshold(mat, mat, 127, 255, this.cv.THRESH_BINARY);
          let M = this.cv.Mat.ones(7, 7, this.cv.CV_8U);
          this.cv.morphologyEx(mat, mat, this.cv.MORPH_OPEN, M);

          this.cv.imshow(this.$refs.img4, mat);  //Binary Inversion on the rotated image
          
          
          let contours = new this.cv.MatVector();
          let hierarchy = new this.cv.Mat();
          this.cv.findContours(mat, contours, hierarchy, this.cv.RETR_CCOMP, this.cv.CHAIN_APPROX_SIMPLE);
          let dst2 = this.cv.Mat.zeros(mat.cols, mat.rows, this.cv.CV_8UC3);
          let contourPositions = [];
          let lines = [];
          for (let i = 0; i < contours.size(); ++i) {
            let contour = contours.get(i);
            let area = this.cv.contourArea(contour, false);
            let rect = this.cv.boundingRect(contour);
            let aspectRatio = rect.width / rect.height;
            let hull = new this.cv.Mat();
            this.cv.convexHull(contour, hull, false, true);
            let hullArea = this.cv.contourArea(hull, false);
            let solidity = area / hullArea;

            if(area > 20 && area < 400 && aspectRatio > 0.75 && aspectRatio < 1.25 && solidity > 0.75){
              let M = this.cv.moments(contour);
              contourPositions.push({
                x: parseInt(M.m10/M.m00),
                y: parseInt(M.m01/M.m00),
                idx: i
              });
              this.cv.drawContours(dst2, contours, i, new this.cv.Scalar(255,0,0), 1, this.cv.LINE_8, hierarchy, 100)
            }
          }
          for (let i=0; i<contourPositions.length; ++i){
            for (let j=i+1; j<contourPositions.length; ++j){
              let m = (contourPositions[j].y-contourPositions[i].y)/(contourPositions[j].x-contourPositions[i].x);
              let angle = Math.atan(m) * (180/Math.PI);
              //Put the length condition here
              let distance = ((contourPositions[i].x-contourPositions[j].x)**2 + (contourPositions[i].y-contourPositions[j].y)**2)**0.5;
              if (distance > minLineLength && distance < maxLineLength){
                lines.push({line:[contourPositions[i].idx,contourPositions[j].idx], a: angle, d: distance});
              }
            }
          }
          /** filter only parallel lines */
          lines = Array.from(new Set(lines.flatMap((l1, i) => {
            let pt11 = contourPositions.find(pos => pos.idx === l1.line[0]);
            let pt12 = contourPositions.find(pos => pos.idx === l1.line[1]);
            return lines.filter((l2, idx) => {
              let pt21 = contourPositions.find(pos => pos.idx === l2.line[0]);
              let pt22 = contourPositions.find(pos => pos.idx === l2.line[1]);
              return (idx!==i && /** not itself */
                      !l1.line.some(r=> l2.line.includes(r)) &&
                      ((pt11.x-pt21.x)**2+(pt11.y-pt21.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt11.x-pt22.x)**2+(pt11.y-pt22.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt12.x-pt21.x)**2+(pt12.y-pt21.y)**2)**0.5 > minLineLength && /** contours not too close */
                      ((pt12.x-pt22.x)**2+(pt12.y-pt22.y)**2)**0.5 > minLineLength && /** contours not too close */
                      (Math.abs(l2.a-l1.a) < 5 || Math.abs(180-Math.abs(l2.a-l1.a)) < 5) && /** about the same angle */
                      Math.abs(l2.d-l1.d) < 10)});/** about the same length */
          })));

          /** draw lines */
          lines.map(l => l.line).forEach(l => {
            let pt1 = contourPositions.find(pos => pos.idx === l[0]);
            let pt2 = contourPositions.find(pos => pos.idx === l[1]);
            this.cv.line(dst2,
                new this.cv.Point(pt1.x, pt1.y),
                new this.cv.Point(pt2.x, pt2.y),
                [0, 0, 255, 255], 1)
          });

          let squareContours = [];
          for(let l1 of lines) {
            /** is perpendicular condition : diagonal about 90 angle (tolerance = 5) */
            let p = Array.from(new Set(lines.filter(l2 => l1.line.some(r => l2.line.includes(r)) &&
                (Math.abs(90 - Math.abs(l1.a - l2.a)) < 5 || Math.abs(270 - Math.abs(l1.a - l2.a)) < 5) &&
                Math.abs(l1.d - l2.d) < 10)));
            if (p.length===2) {
              squareContours.push(...p.flatMap(v => v.line));
              break;
            }
          }
          /** drawContours, remove in production */
          squareContours.forEach(k => this.cv.drawContours(dst2, contours, k, new this.cv.Scalar(0,255,0), 1, this.cv.LINE_8, hierarchy, 100));
          if(squareContours.length === 4){
            /** filter only the 4 corners */
            let squareContourPositions = contourPositions.filter(pos => squareContours.includes(pos.idx));
            let posX = squareContourPositions.map(pos => pos.x).sort((a, b) => a - b);
            let posY = squareContourPositions.map(pos => pos.y).sort((a, b) => a - b);
            let rotateRadian = -lines.filter(l => l.line.every(c => squareContours.includes(c)))
                                     .map(l => l.a * Math.PI / 180)
                                     .sort((a, b) => Math.abs(a) - Math.abs(b))[0];

            console.log(rotateRadian);
            let minX =Math.min(...posX) - cropMargin;
            let minY =Math.min(...posY) - cropMargin;
            let cropLength = Math.max(Math.max(...posX)-minX, Math.max(...posY)-minY) + cropMargin;

            let ctx2 = this.$refs.img6.getContext("2d");    
            // let ctx3 = this.$refs.img8.getContext("2d");    
                        
            
            ctx2.drawImage(this.$refs.img4_1, sxSpace+minX,sySpace+ minY, cropLength, cropLength,  0, 0, this.imageSize, this.imageSize);
            
            this.cv.imshow(this.$refs.img5, dst2);  // Onto Canvas of img5 put dst2 --> openCV next
          }
            this.remoteDecode('original');
          },



    remoteDecode(msg){
      const img = this.$refs.img3.toDataURL(this.type, this.quality);
      console.log(msg+' size : '+JSON.stringify(img.length));
      let config = {
        url:`https://cn-shenzhen-api.gaccai.com/decode`,
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
      // this.remoteDecode('original');
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
