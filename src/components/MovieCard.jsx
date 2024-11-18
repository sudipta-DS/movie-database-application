import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/react";

const MovieCard = ({ image, title, rating, imdb_url }) => {
  return (
    <CCard className="mb-3" style={{ maxWidth: "540px" }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src={image} />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>{title}</CCardTitle>
            <CCardText>Rating: {rating}</CCardText>
            <CCardText>
              <small className="text-body-secondary">
                <a href={imdb_url}>IMDB</a>
              </small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default MovieCard;
