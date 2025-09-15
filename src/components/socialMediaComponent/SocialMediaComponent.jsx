import React from "react";

const SocialMediaComponent = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* YouTube Video Column */}
        <div className="col-md-6 p-2 ">
          <div style={{ width: "100%", height: "400px" }}>
            <iframe
              src="https://www.youtube.com/embed/2pa5mu9yxI4"
              style={{ width: "100%", height: "100%", border: "none" }}
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>

        {/* Facebook Page Column */}
        <div className="col-md-6 p-2 ">
          <div style={{ width: "100%", height: "400px", paddingLeft: "36px" }}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsewabhartimalwaindore&tabs=timeline&width=540&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "hidden",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook Page"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;
