import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {

  const location = useLocation()

  function page(){
    
  }

  return (
    <main>
       <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside style={{backgroundColor: "#E1E3FB"}} className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          
          <Container className="p-4 wrapper" fluid>
            
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
