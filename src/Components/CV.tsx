import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import CVFile from './Assets/my_cv.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function CV() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.download = 'CV_Indira_Borras.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="cv-wrapper">
      <FontAwesomeIcon icon={faDownload} />
      <button onClick={handleDownload} className="download-button">
        Download CV
      </button>
    </div>
  );
}

export default CV;