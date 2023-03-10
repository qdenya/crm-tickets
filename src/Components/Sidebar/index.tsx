import './style.scss';

import iconTicketok from '../../img/sidebar/ticketok-logo.svg';
import iconUser from '../../img/sidebar/user.jpg';
//import { useState } from 'react';

const Sidebar = () => {
    //const [activeTab, setActiveTab] = useState(0);

    return(
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <div className="sidebar_user">
                    <div className="sidebar_user_photo">
                        <img src={iconUser} alt="user" className="sidebar_user_photo_img" />
                    </div>
                    <div className="sidebar_user_info">
                        <span className="sidebar_user_info_name">Денис Дробыш</span>
                        <div className="sidebar_user_info_position">Администратор</div>
                    </div>
                </div>
                <div className="sidebar_menu">
                    <div className="sidebar_menu_item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M16.0754 2H19.4614C20.8636 2 21.9999 3.14585 21.9999 4.55996V7.97452C21.9999 9.38864 20.8636 10.5345 19.4614 10.5345H16.0754C14.6731 10.5345 13.5369 9.38864 13.5369 7.97452V4.55996C13.5369 3.14585 14.6731 2 16.0754 2" fill="#8A92A6"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z" fill="#8A92A6"/>
                        </svg>
                        <span className="sidebar_menu_item_text">Главная</span>
                    </div>
                    <div className="sidebar_menu_item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.012 14.8302C10.4075 14.8302 9.10962 13.5802 9.10962 12.0102C9.10962 10.4402 10.4075 9.18018 12.012 9.18018C13.6165 9.18018 14.8837 10.4402 14.8837 12.0102C14.8837 13.5802 13.6165 14.8302 12.012 14.8302Z" fill="#8A92A6"/>
                            <path opacity="0.4" d="M21.2301 14.3701C21.036 14.0701 20.76 13.7701 20.4023 13.5801C20.1162 13.4401 19.9322 13.2101 19.7687 12.9401C19.2475 12.0801 19.5541 10.9501 20.4228 10.4401C21.4447 9.87012 21.7718 8.60012 21.179 7.61012L20.4943 6.43012C19.9118 5.44012 18.6344 5.09012 17.6226 5.67012C16.7233 6.15012 15.5685 5.83012 15.0473 4.98012C14.8838 4.70012 14.7918 4.40012 14.8122 4.10012C14.8429 3.71012 14.7203 3.34012 14.5363 3.04012C14.1582 2.42012 13.4735 2.00012 12.7172 2.00012H11.2763C10.5302 2.02012 9.84553 2.42012 9.4674 3.04012C9.27323 3.34012 9.16081 3.71012 9.18125 4.10012C9.20169 4.40012 9.10972 4.70012 8.9462 4.98012C8.425 5.83012 7.27019 6.15012 6.38109 5.67012C5.35913 5.09012 4.09191 5.44012 3.49917 6.43012L2.81446 7.61012C2.23194 8.60012 2.55897 9.87012 3.57071 10.4401C4.43937 10.9501 4.74596 12.0801 4.23498 12.9401C4.06125 13.2101 3.87729 13.4401 3.59115 13.5801C3.24368 13.7701 2.93709 14.0701 2.77358 14.3701C2.39546 14.9901 2.4159 15.7701 2.79402 16.4201L3.49917 17.6201C3.87729 18.2601 4.58245 18.6601 5.31825 18.6601C5.66572 18.6601 6.0745 18.5601 6.40153 18.3601C6.65702 18.1901 6.96361 18.1301 7.30085 18.1301C8.31259 18.1301 9.16081 18.9601 9.18125 19.9501C9.18125 21.1001 10.1215 22.0001 11.3069 22.0001H12.6968C13.872 22.0001 14.8122 21.1001 14.8122 19.9501C14.8429 18.9601 15.6911 18.1301 16.7029 18.1301C17.0299 18.1301 17.3365 18.1901 17.6022 18.3601C17.9292 18.5601 18.3278 18.6601 18.6855 18.6601C19.411 18.6601 20.1162 18.2601 20.4943 17.6201L21.2097 16.4201C21.5776 15.7501 21.6083 14.9901 21.2301 14.3701Z" fill="#8A92A6"/>
                        </svg>
                        <span className="sidebar_menu_item_text">Настройки</span>
                    </div>
                    <div className="sidebar_menu_item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M21.25 13.4764C20.429 13.4764 19.761 12.8145 19.761 12.001C19.761 11.1865 20.429 10.5246 21.25 10.5246C21.449 10.5246 21.64 10.4463 21.78 10.3076C21.921 10.1679 22 9.97864 22 9.78146L21.999 7.10415C21.999 4.84102 20.14 3 17.856 3H6.144C3.86 3 2.001 4.84102 2.001 7.10415L2 9.86766C2 10.0648 2.079 10.2541 2.22 10.3938C2.36 10.5325 2.551 10.6108 2.75 10.6108C3.599 10.6108 4.239 11.2083 4.239 12.001C4.239 12.8145 3.571 13.4764 2.75 13.4764C2.336 13.4764 2 13.8093 2 14.2195V16.8949C2 19.158 3.858 21 6.143 21H17.857C20.142 21 22 19.158 22 16.8949V14.2195C22 13.8093 21.664 13.4764 21.25 13.4764Z" fill="#8A92A6"/>
                            <path d="M15.4306 11.5886L14.2516 12.7366L14.5306 14.3596C14.5786 14.6406 14.4656 14.9176 14.2346 15.0836C14.0056 15.2516 13.7066 15.2726 13.4546 15.1386L11.9996 14.3736L10.5416 15.1396C10.4336 15.1966 10.3156 15.2266 10.1986 15.2266C10.0456 15.2266 9.89458 15.1786 9.76458 15.0846C9.53458 14.9176 9.42158 14.6406 9.46958 14.3596L9.74758 12.7366L8.56858 11.5886C8.36458 11.3906 8.29358 11.0996 8.38158 10.8286C8.47058 10.5586 8.70058 10.3666 8.98158 10.3266L10.6076 10.0896L11.3366 8.61256C11.4636 8.35856 11.7176 8.20056 11.9996 8.20056H12.0016C12.2846 8.20156 12.5386 8.35956 12.6636 8.61356L13.3926 10.0896L15.0216 10.3276C15.2996 10.3666 15.5296 10.5586 15.6176 10.8286C15.7066 11.0996 15.6356 11.3906 15.4306 11.5886Z" fill="#8A92A6"/>
                        </svg>
                        <span className="sidebar_menu_item_text">Dashboard</span>
                    </div>
                    <div className="sidebar_menu_item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M16.191 2H7.81C4.77 2 3 3.78 3 6.83V17.16C3 20.26 4.77 22 7.81 22H16.191C19.28 22 21 20.26 21 17.16V6.83C21 3.78 19.28 2 16.191 2Z" fill="#8A92A6"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.07996 6.65002V6.66002C7.64896 6.66002 7.29996 7.01002 7.29996 7.44002C7.29996 7.87002 7.64896 8.22002 8.07996 8.22002H11.069C11.5 8.22002 11.85 7.87002 11.85 7.42902C11.85 7.00002 11.5 6.65002 11.069 6.65002H8.07996ZM15.92 12.74H8.07996C7.64896 12.74 7.29996 12.39 7.29996 11.96C7.29996 11.53 7.64896 11.179 8.07996 11.179H15.92C16.35 11.179 16.7 11.53 16.7 11.96C16.7 12.39 16.35 12.74 15.92 12.74ZM15.92 17.31H8.07996C7.77996 17.35 7.48996 17.2 7.32996 16.95C7.16996 16.69 7.16996 16.36 7.32996 16.11C7.48996 15.85 7.77996 15.71 8.07996 15.74H15.92C16.319 15.78 16.62 16.12 16.62 16.53C16.62 16.929 16.319 17.27 15.92 17.31Z" fill="#8A92A6"/>
                        </svg>
                        <span className="sidebar_menu_item_text">Отчёты</span>
                    </div>
                    <div className="sidebar_menu_item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 10C9 9.44772 9.44772 9 10 9H12C12.5523 9 13 9.44772 13 10V20L15 21H13H10C9.44772 21 9 20.5523 9 20V10Z" fill="#8A92A6"/>
                            <circle opacity="0.5" cx="11" cy="5" r="2" fill="#8A92A6"/>
                        </svg>
                        <span className="sidebar_menu_item_text">О программе</span>
                    </div>
                </div>
                <div className="sidebar_logo">
                    <img src={iconTicketok} alt="" className="sidebar_logo_img" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;