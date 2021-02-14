import '../../index.css';

export default function Backdrop (props) {
    return (
        <div className='backdrop' onClick={props.click}></div>
    )
}