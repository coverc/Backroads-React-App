import Title from './Title';
import { tourData } from '../data';
const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title1 = 'Featured' title2 = 'Tours'/>
            <div className="section-center featured-center">
                {tourData.map((tour) => {
                    const {id, img, date, title, text, location, length, price} = tour;

                    return (
                        <article className="tour-card" key={id}>
                        <div className="tour-img-container">
                            <img src={img} className="tour-img" alt="" />
                            <p className="tour-date">{date}</p>
                        </div>
                        <div className="tour-info">
                            <div className="tour-title">
                                <h4>{title}</h4>
                            </div>
                            <p>
                                {text}
                            </p>
                            <div className="tour-footer">
                                <p>
                                    <span><i className="fas fa-map"></i></span> {location}
                                </p>
                                <p>{length} Days</p>
                                <p>From ${price}</p>
                            </div>
                        </div>
                    </article>
                    )
                })}
                
            </div>
        </section>
    );
}

export default Tours;