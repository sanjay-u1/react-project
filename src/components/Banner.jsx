import { useContext } from "react"
import AppApiContext from "../ContextApi/AppApicontext"
import ApiCategories from "../constant/ApiCategories"

function Banner() {
    const store = useContext(AppApiContext)
    return (
        <div className="banner-section">
            <div className='col-md-6 text-center'>
                <h1 className='text-white text-center mb-5 display-6'>It's the biggest sale of the year!</h1>
                {
                    ApiCategories.map((item, index) => (
                        <button className="btn btn-sm btn-outline-light mx-2" onClick={() => store.setApiType(item)} key={index}>
                            {item.replace('-',' ') }
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Banner