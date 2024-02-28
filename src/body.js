import award from "./Images/1.png";
import gift from "./Images/2.png";
import motors from "./Images/3.png";

const Body = () => {
  return (
    <div>
      <div className="body">
        <img className="image" src={award}></img>
        <div>
          <h3>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h3>
          <ul>
            <li>
              <h4>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </h4>
            </li>
            <li>
              <h4>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </h4>
            </li>
          </ul>
          <img className="gift-card" src={gift}></img>
          <h4>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </h4>
        </div>
      </div>
      <div className="motor-data">
        <h4>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h4>
        <img className="motor-img" src={motors}></img>
      </div>
      <h5 className="centre">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </h5>
      <hr className="red-line" />
      <h4 className="centre">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h4>
      <h5 className="centre">
        CHEMICALS & PROCESS | POWER |POWER WATER & WASTE WATER | OILS & GAS |
        PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL &
        MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC |
        FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
      </h5>
    </div>
  );
};
export default Body;
