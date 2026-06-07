import { useState } from "react";
import { Modal } from "@mantine/core";

export default function ArticlePanel({ children }) {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <Modal
        centered
        classNames={{
          body: "image-preview-modal__body",
          content: "image-preview-modal",
          header: "image-preview-modal__header",
        }}
        fullScreen
        opened={previewImage !== null}
        onClose={() => setPreviewImage(null)}
        padding={0}
      >
        {previewImage && (
          <div
            className="image-preview-backdrop"
            onClick={() => setPreviewImage(null)}
          >
            <div className="image-preview-frame">
              <img
                className="image-preview"
                src={previewImage.src}
                alt={previewImage.alt}
              />
            </div>
          </div>
        )}
      </Modal>

      <article className="article-panel">
        {children({ openImage: setPreviewImage })}
      </article>
    </>
  );
}
