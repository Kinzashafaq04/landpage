

function Card(props){
    return <div>
        <div className='border-rounded p-3'>
            <img src={props.imageSrc} width='100%' alt='' />
            <div className='p-3'>
                <h6>{props.title}</h6>
                <p className="text-muted">{props.details}</p>
                <h5 className="text-danger">{props.price}</h5>
            </div>

        </div>

    </div>
}
export default Card;    