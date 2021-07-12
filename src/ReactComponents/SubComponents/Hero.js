import React from 'react'

const ContentComp = (props)=>{
    return (
    <div class="container center">
    {props.icon}
    <h3 class="display-4 fw-bold mt-sm-1 mb-sm-2 text-color-primary">{props.title}</h3>
    <p class="lh-lg content">{props.content}</p>
     <button type="button" class="rounded-pill btn-rounded border-black-round"> Learn more <span ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg></span> </button>
    </div>);
}

const ImageComp = (props)=>{
    return(<div class="container img-container"><img class="img-fluid" src={props.image} /></div>);
}


export default function Hero(props) {
    return (
        <div class="container hero shadow-sm ">
            <div class ="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    {props.left == true ? <ContentComp icon={props.icon} title={props.title} content={props.content} /> :<ImageComp image={props.image} />  }           
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    {props.left == true ? <ImageComp image={props.image} /> :<ContentComp icon={props.icon} title={props.title} content={props.content} />   }           
                
                </div>

            </div>
            
        </div>
    )
}
