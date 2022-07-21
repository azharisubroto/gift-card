import { useState } from 'react';
import Layout from '@/components/Layout';
import TextField from '@/components/TextField';
import DropZone from '@/components/DropZone';
import { tw } from 'twind/css';
import { handleDownloadImage } from '@/lib/helpers';
import Button from '@/components/Buttonn';

/**
 * Home page
 */
export default function Home() {
  const [form, setForm] = useState({
    dear: `My Love`,
    message: `I hope this message finds you well`,
    from: `Your love`
  });
  const [files, setFiles] = useState([]);

  /**
   * Handle field change
   * @param e - event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Handle Drop Images
   * @param acceptedFiles - Array
   */
  const handleDrop = (acceptedFiles: any) => {
    acceptedFiles.map((file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFiles(
          acceptedFiles.map((file: File) =>
            Object.assign(file, {
              base64: event.target?.result
            })
          )
        );
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Layout>
      <form>
        <section className={tw([`px-8 lg:px-16 py-8 lg:py-10 mx-auto`])}>
          {/* Preview */}
          <div className={`${tw(`mb-3`)} composer`} id="composer">
            {files.length > 0 && (
              <div className="overlay">
                <div className="dear">{form.dear}</div>
                <div className="message">{form.message}</div>
                <div className="from">{form.from}</div>
              </div>
            )}

            {/* Background */}
            {files.map((file: any) => (
              <div key={`img-${file?.name}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file?.base64}
                  alt=""
                  onLoad={() => {
                    URL.revokeObjectURL(file.base64);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Image upload */}
          <DropZone maxFiles={1} onDrop={(acceptedFiles) => handleDrop(acceptedFiles)} />

          {/* Dear field */}
          <TextField label="Dear" name="dear" type="text" value={form.dear} onChange={handleChange} />

          {/* Message field */}
          <TextField label="Message" name="message" type="text" value={form.message} onChange={handleChange} />

          {/* Form Field */}
          <TextField label="From" name="from" type="text" value={form.from} onChange={handleChange} />
        </section>

        {/* DOWNLOAD BUTTON */}
        <div className={tw(`text-center py-8 border-t border-gray border-slate-300`)}>
          <Button primary onClick={handleDownloadImage}>
            Download
          </Button>
        </div>
      </form>

      <style jsx>{`
        .composer {
          position: relative;
          display: block;
          margin-left: auto;
          margin-right: auto;
          cursor: default;
          pointer-events: none;
        }
        .composer img {
          width: 100%;
          display: block;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 55%;
          height: 40%;
          font-size: var(--font-size-base);
        }

        .dear {
          margin-left: 45%;
        }

        .message {
          margin-left: 12%;
          margin-top: calc(10px + 6 * ((100vw - 320px) / 680));
          line-height: 210%;
        }

        .from {
          position: absolute;
          margin-left: 35%;
          bottom: 24%;
        }

        @media screen and (min-width: 320px) {
          .overlay {
            font-size: var(--font-size-base);
            max-width: 480px;
          }
          .message {
            margin-top: calc(7px + 6 * ((100vw - 320px) / 680));
            line-height: calc(200% + 6 * ((100vw - 320px) / 680));
          }
        }
        @media screen and (min-width: 768px) {
          .composer {
            max-width: 480px;
          }
          .overlay {
            font-size: var(--font-size-base);
            max-width: 480px;
          }
          .message {
            margin-top: calc(7px + 6 * ((100vw - 320px) / 680));
            line-height: calc(200% + 6 * ((100vw - 320px) / 680));
          }
        }
        @media screen and (min-width: 1000px) {
          .composer {
            max-width: unset;
          }
          .overlay {
            font-size: var(--font-size-base);
          }
        }
      `}</style>
    </Layout>
  );
}
