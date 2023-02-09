import './style.scss';

interface header {
    title: string;
}

const Header = ({ title }: header) => {
    return(
        <div className="header">
            <div className="header_container">
                <div className="header_wrapper">
                    <h1 className="header_title">{title}</h1>
                </div>
            </div>
        </div>
    );

}
export default Header;