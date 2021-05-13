import Homepage from "./components/homepage/homepage.component.jsx";
import {Switch, Route} from 'react-router-dom'
import Shop_Page from './pages/shop/shop-page.component'

function app() {
  return(
    <div>
      <Switch>

      <Route exact path = "/" component = {Homepage}/>
      <Route path = "/shop" component = {Shop_Page}/>
     

      </Switch>
     

    </div>
  );
  
}
export default app;

