import '../../../index.css';

export default function DrawerToggleButton (props) {
    return (
        <button className='toggle-button' onClick={props.click}>
            <div className='toggle-button_line'/>
            <div className='toggle-button_line'/>
            <div className='toggle-button_line'/>
        </button>
    );
};