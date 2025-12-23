
import React, { useState } from 'react'

// Supports either HTML5 <video> via `src` or an iframe via `iframeSrc`
// Use `iframeSrc` for providers like YouTube/Vimeo (embed URLs)
const VideoModal = ({
  src = '/videos/sample-video.mp4',
  poster,
  iframeSrc,
  iframeTitle = 'Video',
  iframeAllow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
  iframeAllowFullScreen = true,
}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((m) => !m);
  };

  const onBgClick = (e) => {
    // Close when clicking outside the content area
    if (e.target.classList.contains('modal__bg')) {
      toggleModal();
    }
  };

  return (
    <div className="v-modal-area">
      <div className="v-modal-wrap">
        {modal ? (
          <section
            className="modal__bg"
            role="dialog"
            aria-modal="true"
            aria-label="Video dialog"
            onClick={onBgClick}
          >
            <button onClick={toggleModal} className="close" aria-label="Close video">
              <i className='fa fa-close'></i>
            </button>
            <div className="modal__align">
              <div className="modal__content">
                <div className="modal__video-align">
                  {iframeSrc ? (
                    <iframe
                      className="modal__video-style"
                      src={iframeSrc}
                      title={iframeTitle}
                      frameBorder="0"
                      allow={iframeAllow}
                      allowFullScreen={iframeAllowFullScreen}
                    />
                  ) : (
                    <video
                      className="modal__video-style"
                      src={src}
                      poster={poster}
                      controls
                      autoPlay
                      playsInline
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}

export default VideoModal;
