import { Component, ElementRef} from '@angular/core';


@Component({
  selector: 'app-singlet',
  templateUrl: './singlet.component.html',
  styleUrls: ['./singlet.component.css']
})
export class SingletComponent {


  dragStarted() {
    // Handle drag started event
    console.log('Drag started');
  }

  dragEnded() {
    // Handle drag ended event
    console.log('Drag ended');
  }

  // ############################ variables #################################
  // use for disable
  imageDp = "block";
  colorDp = "none";

  thumbnail = "none";
  color_thumbnail = "none";

  side_panel = "none";
  side_panel_color = 'none'

  cuff = "none";
  cuff_color = 'none';

  piping = "none";
  piping_color = 'none';

  inner_thigh = "none";
  inner_thigh_color = 'none';
  // #################### use for data pas #############
  color = "#faeab1";
  thumbNail = "";
  cthumb = "";
  sidePanelUrl = ""
  // for side panel
  sidePanelColor = ""
  // for cuff
  cuffUrl = ""
  cuffColor = ""
  // for piping
  pipingUrl = ""
  pipingColor = ""
  // for cuff
  innerThighUrl = ""
  innerThighColor = ""
  // use for section
  logic = "design";
  // for slide button
  slide = 0;
  pipe = false;
  thigh = false;



  // ---------------------------------------------------------------------------------------------------------


  // for disable functin
  disable() {
    this.imageDp = "block";
    this.colorDp = "none";
    this.thumbnail = "none";
    this.color_thumbnail = "none";
    this.side_panel = "none";
    this.side_panel_color = 'none'
    this.cuff = "none";
    this.cuff_color = 'none';
    this.piping = "none";
    this.piping_color = 'none';
    this.inner_thigh = "none";
    this.inner_thigh_color = 'none';
  }

  Piping(data: boolean) {
    console.warn(this.pipe);
    if (data == false) {

      this.pipe = true;
    } else if (data == true) {
      this.pipe = false;
    }
  }
  ithigh(data: boolean) {
    console.warn(this.pipe);
    if (data == false) {

      this.thigh = true;
    } else if (data == true) {
      this.thigh = false;
    }
  }
  // use for thumnail image
  // ################################ use for main image disable ##################################
  mainImage(data: string) {




    this.imageDp = "none";
    if (data == "thumbnail") {

      this.colorDp = "none";
      this.thumbnail = "block";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == "color") {
      this.colorDp = "block";


      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == "color_thumbnail") {
      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "block";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == "side_Panel") {
      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "block";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';


    } else if (data == "side_panel_color") {
      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'block'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == 'cuff') {

      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "block";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == 'cuff_color') {

      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'block';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == 'piping') {
      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'block';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'none';
    } else if (data == 'thigh') {
      this.colorDp = "none";
      this.thumbnail = "none";
      this.color_thumbnail = "none";
      this.side_panel = "none";
      this.side_panel_color = 'none'
      this.cuff = "none";
      this.cuff_color = 'none';
      this.piping = "none";
      this.piping_color = 'none';
      this.inner_thigh = "none";
      this.inner_thigh_color = 'block';
    }

  }
  // ###############################use for main image element disable ##################################
  updateColorDp(color: string) {
    if (color) {
      this.color = color;
    }
    this.disable();

  }
  // For ThumbNail

  thName='solid';
  imageUrl(name:string ,data: string ): void {

    this.thumbNail = data;
    this.thName=name;
    this.disable();

  }
  t_color = '#ffffff';

  updateThumbnailColor(s: string, color: string) {
    if (color) {
      this.cthumb = color;
      this.t_color = s;
    }
    this.disable();
  }
  // For side panel
  sName = 'none';
  sidePanel(name:string,data: string  ) {


    if (data) {

      this.sidePanelUrl = data;
      this.sName=name;


    }
    this.disable();
  }
  p_color = '#ffffff';
  PanelColor(s: string, data: string) {

    if (data) {

      this.sidePanelColor = data;
      this.p_color = s;


    }
    this.disable();
  }

  // For cuff
  cName = 'none';
  updateCuffImage(name:string , data: string) {
    if (data) {

      this.cuffUrl = data;
      this.cName=name;

    }
    this.disable();
  }
  c_color = '#ffffff';
  updateCuffColor(s: string, data: string) {


    if (data) {

      this.cuffColor = data;
      this.c_color = s;
    }
    this.disable();
  }
  // For piping
  pipingImage(data: string) {
    console.warn(data);

    if (data) {

      this.pipingUrl = data;
    }
    this.disable();
  }
  pip_color = '#ffffff';
  pipinColor(s: string, data: string) {
    console.warn(data);

    if (data) {

      this.pipingColor = data;
      this.pip_color = s;
    }
    this.disable();
  }
  // For innerThigh
  innerThighImage(data: string) {
    console.warn(data);

    if (data) {

      this.innerThighUrl = data;
    }
    this.disable();
  }
  Thigh_color = '#ffffff'
  innerThiColor(s: string, data: string) {


    if (data) {

      this.innerThighColor = data;
      this.Thigh_color = s;
    }
    this.disable();
  }



  // ########################################### use for sections  #######################################

  next() {
    if (this.logic == "design") {
      this.image();
    } else if (this.logic == 'image') {
      this.text();

    } else if (this.logic == 'text') {
      this.review();
    } else if (this.logic == 'review') {
      this.submit();
    }
  }
  designActive = '#4d4d4d';
  imageActive = '';
  textActive = '';
  reviewActive = '';
  submitActive = '';


  forActive(data: string) {
    if (data == 'design') {
      this.designActive = '#4d4d4d';
      this.imageActive = '';
      this.textActive = '';
      this.reviewActive = '';
      this.submitActive = '';
    }else if (data == 'image') {
      this.designActive = '';
      this.imageActive = '#4d4d4d';
      this.textActive = '';
      this.reviewActive = '';
      this.submitActive = '';
    }else if (data == 'text') {
      this.designActive = '';
      this.imageActive = '';
      this.textActive = '#4d4d4d';
      this.reviewActive = '';
      this.submitActive = '';
    }else if (data == 'review') {
      this.designActive = '';
      this.imageActive = '';
      this.textActive = '';
      this.reviewActive = '#4d4d4d';
      this.submitActive = '';
    }else if (data == 'submit') {
      this.designActive = '';
      this.imageActive = '';
      this.textActive = '';
      this.reviewActive = '';
      this.submitActive = '#4d4d4d';
    }
  }

  design() {

    this.logic = "design"
    this.forActive(this.logic);
    this.disable();


  }

  image() {


    this.logic = "image"
    this.forActive(this.logic);
    this.disable();
  }
  text() {


    this.logic = "text"
    this.forActive(this.logic);
    this.disable();
  }
  review() {


    this.logic = "review"
    this.forActive(this.logic);
    this.disable();

  }
  submit() {


      this.logic = "submit"
      this.forActive(this.logic);

    this.disable();
    this.imageDp = 'none';

  }

  /// #################################### for slide button #############################
  side(data: number) {
    if (data == 0) {
      this.slide = -720;


    } else {
      this.slide = 0;
    }
  }

  // #########################################################################################################################################

  isClassActive: boolean = true;

  name = "";
  n = 100;
  text_range = 20;
  Text = '';


  fileUrl = "";
  get() {

  }

  file(event: any) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.fileUrl = e.target.result;
      }
    }
  }
  onRangeChange(data: number) {
    this.n = data;


  }
  textRangeChange(data: number) {
    this.text_range = data;


  }


  updateText() {
    console.warn(

      this.Text
    );
  }

  test() {
    console.warn("hello");

  }


  //// for Drag

}
