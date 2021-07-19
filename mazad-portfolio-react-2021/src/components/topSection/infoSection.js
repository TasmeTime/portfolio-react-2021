import portrait from "../../assets/images/avatar.jpg";

const socials = {
  instagram: "https://www.instagram.com/thetasmetime/",
  github: "https://github.com/TasmeTime",
  youtube: "https://www.youtube.com/channel/UCwDaYpbaakiM6pplB8x_0RA",
  linkedin: "https://www.linkedin.com/in/moslem-azad/",
  twitter: "https://twitter.com/TheTasmeTime",
  email: "moslem.azad.shmhle@outlook.com",
};

export default function InfoSection() {
  return (
    <div className="row">
      <div className="topSectionInfo col-12 col-sm-12 col-m-12 col-lg-6 col-xl-6 row">
        <div className="col portrait">
          <img src={portrait} alt="Portrait" className="img-thumbnail" />
        </div>
        <div className="col-8 info">
          <p style={{ marginBottom: 0 }}>Hello There! I'm</p>
          <h2 style={{ marginBottom: "1px" }}>MOSELM AZAD</h2>
          <p>and i'm a full-stack web developer and software engineer</p>
        </div>
      </div>
      <div className="col-6 col-12 col-sm-12 col-m-12 col-lg-6 col-xl-6">
        <div className="topSectionSocial col-6 col-12 col-sm-12 col-m-12 col-lg-4 col-xl-4">
          <div className="socialsContainer">
            <a target="_blank" href={socials.instagram}>
              <span className="socialBadge">
                <i className="bi-instagram"></i>
              </span>
            </a>
            <a target="_blank" href={socials.github}>
              <span className="socialBadge">
                <i className="bi-github"></i>
              </span>
            </a>
            <a target="_blank" href={socials.youtube}>
              <span className="socialBadge">
                <i className="bi-youtube"></i>
              </span>
            </a>
            <a target="_blank" href={socials.linkedin}>
              <span className="socialBadge">
                <i className="bi-linkedin"></i>
              </span>
            </a>
            <a target="_blank" href={socials.twitter}>
              <span className="socialBadge">
                <i className="bi-twitter"></i>
              </span>
            </a>
            <a target="_blank" href={"mailto:" + socials.email}>
              <span className="socialBadge">
                <i className="bi-at"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
