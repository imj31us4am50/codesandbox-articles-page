import FooterCSS from "/footer/Footer.css";

export default function Footer() {
  return (
    <div className="container-fluid footer text-white text-center pt-3 pb-3">
      <div className="row h5 opacity-50 mx-auto ipqle">
        <div class="col-4 text-center awa">Ajutăm.</div>
        <div class="col-4 text-center awa">Protejăm.</div>
        <div class="col-4 text-center awa">Înștiințăm.</div>
      </div>
      <div className="row h6 opacity-75 mx-auto mt-3">
        <p className="fs"> Copyright &copy; 2022 Nature Smarter </p>
      </div>
    </div>
  );
}
