import React from 'react'

export default function Form() {

  return (

    <>
      <div className="d-flex justify-content-center mx-5">
        <form className='col-6' name="contact" method="POST" data-netlify="true">
          <div className='mb-3'>
            <label  htmlFor="name" className="form-label">Votre Nom</label>
            <textarea className="form-control" id="MessageFromSomeone" rows="1"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Votre adresse eMail</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
            <div id="emailHelp" className="form-text">L&apos;adresse e-mail ne sera en aucun cas partagée</div>
          </div>
          <div className=" mb-3">
            <label htmlFor="exampleInputText" className="form-label">Votre Message</label>
            <textarea className="form-control" id="MessageFromSomeone" rows="6"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
          <input type="hidden" name="form-name" value="contact"></input>
        </form>
      </div>
    </>

  )
}
