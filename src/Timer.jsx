import { Component } from "react";

class Timer extends Component{
    state = {
        hours: 0,
        minut: 0,
        seconds: 0,
        btnDisabled: false,
        interval: "",
        intervalStorage: []
    }
    handleStart = () => {
        this.setState({
            btnDisabled: true
        })
       let timer =  setInterval(() => {
            let {seconds, minut, hours} = this.state
            if(seconds < 60){
                this.setState({
                    seconds: seconds+1
                })
            }else{
                this.setState({
                    seconds: seconds  = 0,
                    minut: minut + 1
                })
                if(minut >= 60){
                    this.setState({
                        seconds: seconds  = 0,
                        minut: minut = 0,
                        hours: hours+1
                    })
                    if(hours >= 24){
                        this.setState({
                            seconds: seconds  = 0,
                            minut: minut = 0,
                            hours: hours = 0
                        })
                    }
                }
            }
        }, 1000)    
        this.setState({
            interval: timer
        })
    }
    handleStop = () => {
        this.setState({
            interval : clearInterval(this.state.interval),
            btnDisabled: false
        })
    }
    handleInterval = () => {
        const {hours, minut, seconds, intervalStorage, btnDisabled} = this.state
        if(btnDisabled === true){
            this.setState({
                intervalStorage: [...intervalStorage, `${hours}:${minut}:${seconds}`]
            })
        }
    }
    handleClear = () => {
        this.setState({
            interval: clearInterval(this.state.interval),
            hours: 0,
            minut: 0,
            seconds: 0,
            intervalStorage: [],
            btnDisabled: false
        })
    }
    render(){
        const {intervalStorage } = this.state
        return(
            <div className="Timer_stop">
                <div className="container ">
                    <div className="Timer_num    ">
                        
                        
                        <ul className=" timer_num  list-unstyled d-flex align-items-center justify-content-center m-3">
                            <li className="m-3"><h2>{this.state.hours === 0 ? this.state.hours : this.state.hours.toString().padStart(2, "0")} :  <span>Hours</span></h2></li>
                            <li className="m-3"><h2>{this.state.minut  === 0 ? this.state.minut : this.state.minut.toString().padStart(2, "0")} :  <span>Minut</span> </h2></li>
                            <li className="m-3"><h2>{this.state.seconds  === 0 ? this.state.seconds : this.state.seconds.toString().padStart(2, "0")} : <span>Seconds</span> </h2></li>
                        </ul>
                    </div>
                    <ul className="timer_btns list-unstyled d-flex align-items-center justify-content-center m-3">
                        <li><button className="btn btn-success m-3" onClick={this.handleStart} disabled={this.state.btnDisabled}>Start</button></li>
                        <li><button className="btn btn-danger m-3" onClick={this.handleStop}>Stop</button></li>
                        <li><button className="btn btn-primary m-3" onClick={this.handleInterval}>InTerval</button></li>
                        <li><button className="btn btn-secondary m-3" onClick={this.handleClear}>Clear</button></li>
                    </ul>
                    <div className="watching__interval">
                        {intervalStorage?.length ? (
                            <>
                                {intervalStorage?.map(item => {
                                    return(
                                        <p>{item}</p>
                                    )
                                })}
                            </>
                        ): <h2>Interval yo'q</h2>}
                    </div>
                </div>
            </div>
        )
    }
}
export default Timer



























































// import { Component } from "react";
// class Timer extends Component{
//     state = {
//         hours: 0,
//         minut: 0,
//         seconds: 0,
//         btnDisabled: false,
//         interval: "",
//         intervalStorage: []
//     }
//     handleStart = () => {
//         this.setState({
//             btnDisabled: true
//         })
//        let timer =  setInterval(() => {
//             let {seconds, minut, hours} = this.state
//             if(seconds < 60){
//                 this.setState({
//                     seconds: seconds+1
//                 })
//             }else{
//                 this.setState({
//                     seconds: seconds  = 0,
//                     minut: minut + 1
//                 })
//                 if(minut >= 60){
//                     this.setState({
//                         seconds: seconds  = 0,
//                         minut: minut = 0,
//                         hours: hours+1
//                     })
//                     if(hours >= 24){
//                         this.setState({
//                             seconds: seconds  = 0,
//                             minut: minut = 0,
//                             hours: hours = 0
//                         })
//                     }
//                 }
//             }
//         }, 1000)    
//         this.setState({
//             interval: timer
//         })
//     }
//     handleStop = () => {
//         this.setState({
//             interval : clearInterval(this.state.interval),
//             btnDisabled: false
//         })
//     }
//     handleInterval = () => {
//         const {hours, minut, seconds, intervalStorage, btnDisabled} = this.state
//         if(btnDisabled === true){
//             this.setState({
//                 intervalStorage: [...intervalStorage, `${hours}:${minut}:${seconds}`]
//             })
//         }
//     }
//     handleClear = () => {
//         this.setState({
//             interval: clearInterval(this.state.interval),
//             hours: 0,
//             minut: 0,
//             seconds: 0,
//             intervalStorage: [],
//             btnDisabled: false
//         })
//     }
    
//     render(){
//         const {intervalStorage } = this.state
//         return(
//             <div className="timer_chess">
//                 <div className="container">
//                     <div className="number">
//                         <ul className="timer_num d-flex align-items-center justify-content-ceneter m-3 list-unstyled">
//                              <li className="m-3"> <h2>{this.state.hours=== 0 ? this.state.hours: this.state.hours.toString().padStart(2,"00")}:Hours</h2></li>
//                              <li className="m-3"><h2>{this.state.minut===0 ? this.state.minut:this.state.minut.toString().padStart(2,"00")}:Minut</h2></li>
//                              <li className="m-3"><h2>{this.state.seconds===0?this.state.seconds:this.state.seconds.toString().padStart(2,"00")}:Secunds   </h2></li>
                            
//                         </ul>
//                     </div>
//                     <ul className="timer_btns list-unstyled d-flex align-items-center justify-content-center m-3">
//                       <li><button className="btn btn-success m-3" onClick={this.handleStart}>Start</button></li>
//                       <li><button className="btn btn-danger m-3"onClick={this.handleStop}>Stop</button></li>
//                       <li><button className="btn btn-primary m-3 "onClick={this.handleInterval}>Interval</button></li>
//                       <li><button className="btn btn-secondary"onClick={this.handleClear}>Clear</button></li>
//                     </ul>
//                     <div className="Interval">
                   
//                     {intervalStorage?.length ? (
//                             <>
//                                 {intervalStorage?.map(item => {
//                                     return(
//                                         <p>{item}</p>
//                                     )
//                                 })}
//                             </>
//                         ): <h2 className="text-center">Time Not</h2>}
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Timer