// class component

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <Home alex={"alex"} />
        i am handsome
      </div>
    )
  }
}



// functional component
const Home = () => {
  return(
    <div>
        i am handsome
      </div>
  )
}