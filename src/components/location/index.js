import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15630.555564255823!2d69.17461980735715!3d34.555592634831555!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f4e3acfe4a14686!2z0K3QvNCx0LDRgdGB0Lgg0L7RhCDQrtC90LDQudGC0LXQtCDQodGC0LXQudGC0YE!5e0!3m2!1sru!2s!4v1551366665135" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen
                title="map">
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
}

export default Location;