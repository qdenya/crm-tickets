import './style.scss';

interface quotaItem {
    // eslint-disable-next-line
    info: any;
}

const QuotaItem = ({ info }: quotaItem) => {

    // eslint-disable-next-line
    const { price, sale, total_quota, service, total_price, total_service } = info;

    return(
        <div className="quota">
            <div className="quota_wrapper">
                <div className="quota_head">
                    <span className="quota_title">Квота</span>
                    <div className="quota_prices">
                        <div className="quota_prices_price">
                            <span className="quota_prices_price_text">Цена:</span>
                            <span className="quota_prices_price_number">{(price/100).toFixed(2)}</span>
                        </div>
                        <div className="quota_prices_price">
                            <span className="quota_prices_price_text">Сервисный сбор:</span>
                            <span className="quota_prices_price_number">{(service/100).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="quota_stats">
                    <div className="quota_stats_info">
                        <div className="quota_stats_info_sold">
                            <span className="quota_stats_info_sold_text">Продано:</span>
                            <span className="quota_stats_info_sold_number">{sale}</span>
                        </div>
                        <div className="quota_stats_info_quota">
                            <span className="quota_stats_info_quota_text">В продаже:</span>
                            <span className="quota_stats_info_quota_number">{total_quota}</span>
                        </div>
                        <div className="quota_stats_info_indicator">
                            <div className="quota_stats_info_indicator_sale"
                                style={{width: (sale/total_quota)*100+'%'}}
                            ></div>
                        </div>
                    </div>
                    <div className="quota_stats_total">
                        <span className="quota_stats_total_text">Заработано с квоты</span>
                        <span className="quota_stats_total_number">{(total_price/100).toFixed(2)} Br</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuotaItem;