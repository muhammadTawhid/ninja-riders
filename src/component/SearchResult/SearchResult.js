import React from 'react';

const SearchResult = (props) => {


    return (
        <div className="d-flex justify-content-center">
            <div className="mr-5">
                <h3>This is search result</h3>
                <p>But I failed to show the dynamic search result <br /> sorry! </p>

            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3870408896!2d90.27923746648437!3d23.780573255830905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1616409458261!5m2!1sen!2sbd" width="800" height="600" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default SearchResult;