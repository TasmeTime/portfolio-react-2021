import Card from "../../card";

export default function ContactMe(props) {
  return (
    <Card col="12">
      <div className="row">
        <div className="col-12 col-sm-12 col-m-12 col-lg-6 col-xl-6">
          <form>
            <div className="col-12">
              <textarea
                rows="5"
                name="message"
                placeholder="your message... "
                className="form-control"
              ></textarea>
            </div>
            <div className="col-12">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="your message"
              />
            </div>
            <div className="row">
              <div className="col-9">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  placeholder="your email"
                />
              </div>
              <div className="col-3" style={{ paddingLeft: 0 }}>
                <button className="btn form-control btn-primary">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-sm-12 col-m-12 col-lg-6 col-xl-6 text-center mt-3">
          <h3>You can reach me using top-right social buttons</h3>
          or
          <h3>Send me message using this form.</h3>
        </div>
      </div>
    </Card>
  );
}
