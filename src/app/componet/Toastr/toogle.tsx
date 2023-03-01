type Props = {}

export const Toogle = () => {
  return (
    <div className='text-center d-flex'>
      <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
        <span className='form-check-label text-danger fs-6 fw-bold ms-0 me-2'></span>
        <input className='form-check-input' type='checkbox' value='1' />
      </label>
    </div>
  )
}
