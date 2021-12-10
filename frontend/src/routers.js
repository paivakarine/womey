import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home"
import About from "./views/About/index"
import CreateAccount from "./views/CreateAccount/index"


const Routers = () => {

  return (

    <BrowserRouter>
      <Switch>

        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/create" component={CreateAccount} />



      </Switch>

    </BrowserRouter>
  )

}

export default Routers;