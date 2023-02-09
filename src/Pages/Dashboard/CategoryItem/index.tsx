import QuotaItem from '../QuotaItem';
import './style.scss';

interface categoryItem {
    info: any;
}

const CategoryItem = ({ info }: categoryItem) => {

    const { title, total_sale, total_quota, total_price, quots} = info;

    const getQuots = () => {
        return(
            quots?.map((item: any, index:number) => {
                return(
                    <QuotaItem 
                        key={index}
                        info={item}
                    />
                );
            })
        );
    }

    return(
        <>
            <div className="category">
                <div className="category_wrapper">
                    <div className="category_head">
                        <span className="category_title">{title}</span>
                        <div className="category_status">Активно</div>
                    </div>
                    <div className="category_stats">
                        <div className="category_stats_info">
                            <div className="category_stats_info_sold">
                                <span className="category_stats_info_sold_text">Продано:</span>
                                <span className="category_stats_info_sold_number">{total_sale}</span>
                            </div>
                            <div className="category_stats_info_quota">
                                <span className="category_stats_info_quota_text">В продаже:</span>
                                <span className="category_stats_info_quota_number">{total_quota}</span>
                            </div>
                            <div className="category_stats_info_indicator">
                                <div className="category_stats_info_indicator_sale"
                                    style={{width: (total_sale/total_quota)*100+'%'}}
                                ></div>
                            </div>
                        </div>
                        <div className="category_stats_total">
                            <span className="category_stats_total_text">Всего заработано</span>
                            <span className="category_stats_total_number">{(total_price/100).toFixed(2)} Br</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            {getQuots()}
        </>
    );
}

export default CategoryItem;