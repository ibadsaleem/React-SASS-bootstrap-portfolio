import React from 'react'

export default function ContactCard(props) {
    return (
        <div class="row">
            <div class="col-3 custom-icon">{props.svgimg}</div>
            <div class="col-9 pt-2">
                <div>{props.info}</div>
                <p>{props.subinfo}</p>
                
            </div>
        </div>
    )
}
