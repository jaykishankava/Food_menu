import { menu,item } from "./pages/Data"
import Product from "./pages/Product"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {

  return (
    <div>
    <Product menu={menu} item={item}/>
    </div>
  )
}

export default App
