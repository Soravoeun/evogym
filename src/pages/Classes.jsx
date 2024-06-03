import GridCardImg from "../component/GridCardImg";
import "./Classes.css";

function Class() {
  return (
    <>
      <div className="menu-class">
        <section className="title page">
          <h2>OUR CLASSES</h2>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio quas
            nesciunt, quo dolor tempora, inventore perferendis accusantium
            possimus sed quidem deleniti fuga exercitationem explicabo eius vero
            rerum iusto nulla ad.
          </p>
              </section>
              
              <section className="gridContainer">
                  <GridCardImg/>
              </section>
      </div>
    </>
  );
}

export default Class;
