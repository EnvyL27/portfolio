import avatar from "./../assets/me.png";

function home() {
  return (
    <>
      <div className="hero min-h-screen  bg-base-200">
        <div className="grid column-1 hero-content text-center rounded-b-full overflow-hidden">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img className="mb" src={avatar} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
