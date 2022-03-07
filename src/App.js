import "./app.css"
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [open, setOpen] = useState(false)
  const [box, setBox] = useState(true)

  return (
    <div className="App">
      <div className="container1">
        <div class="dropdown">

          <div onClick={() => setOpen(!open)} className="dropbtn ">

            <img src="/img_01.png" alt="" />
            <h7 className="pr-4">Select employee</h7>
            <img className="arrow-down pr-1" src="/angle-down-solid.svg" alt="" />
            {/* <img onChange={setOpen()} className="arrow-down pr-1" src="/angle-down-solid.svg" alt="" /> */}

          </div>
          {/* <i className="fas fa-spinner fa-4x fa-spin" />
        <i className="fa-light fa-angle-down" />
        <i class="fa-solid fa-angle-down"></i> */}
          {/* <FontAwesomeIcon icon="fa-light fa-angle-down" /> */}




          <div id="myDropdown " className={open ? "dropdown-content show" : "dropdown-content"}>
            <div class="search_box">
              <div class="search_btn"><i class="fas fa-search"></i></div>
              <input type="text" class="input_search" placeholder="Search employee..." />
            </div>
            <br />

            <div className="padding">



              <div className="section">
                <img src="/img_02.png" alt="" />
                <label className="paddingr" for="vehicle1"> All employee</label>
                <label class="main">
                  <input type="checkbox" />
                  <span class="cb"></span>
                </label>
                {/* <input class="form-check-input text-primary" type="checkbox" value="" id="flexCheckDefault" />
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" /> */}
                {/* <span class="checkmark"></span> */}
              </div>
              <hr class="line"></hr>

              {/* <div class="form-group">
                <input type="checkbox" id="html" />
                <label for="html">HTML</label>
              </div> */}

              <br />
              <div className="section">
                <img src="/img_03.png" alt="" />
                <label className="pr1" for="vehicle1"> Dr. Siegfried Tausend</label>
                <label class="main">
                  <input type="checkbox" />
                  <span class="cb"></span>
                </label>
              </div>
              <hr class="line"></hr>
              <br />

              <div className="section1">
                <label className="cl">All practitioners</label>
                <label class="main">
                  <input type="checkbox" value={box} />
                  <span class="cb"></span>
                </label>
              </div>
              <hr class="line"></hr>
              <br />

              <div className="section">
                <img src="/img_04.png" alt="" />
                <label className="pr" for="vehicle1"> Dr. Xavier III</label>
                <label class="main">
                  <input type="checkbox" value="practitioner" />
                  <span class="cb"></span>
                </label>
              </div>
              <hr class="line"></hr>
              <br />
              <div className="section">
                <img src="/img_05.png" alt="" />
                <label className="paddingr" for="vehicle1"> Dr. Don Health</label>
                <label class="main">
                  <input type="checkbox" value="practitioner" />
                  <span class="cb"></span>
                </label>
              </div>
              <hr class="line"></hr>
              <br />
              <div className="section">
                <img src="/img_06.png" alt="" />
                <label className="pr1" for="vehicle1"> Dr. Siegfried Tausend</label>
                <label class="main">
                  <input type="checkbox" value="practitioner" />
                  <span class="cb"></span>
                </label>
              </div>





            </div>
          </div>
        </div>
      </div>
      <div className="container2">

        <div class="date-picker">
          {/* <label htmlFor="">Pick date</label> */}
          <input className="date-picker" type="date" value="2022-07-03" />
        </div>
      </div>


    </div >

  );
}

export default App;
