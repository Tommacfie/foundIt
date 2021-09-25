import ButtonStd from '../presentational/button-std.component';
const DeleteModal = (props) => {
  return (
    <div className='modal-delete-component'>
      <ButtonStd text={Yes} />
      <ButtonStd text={No} />
    </div>
  )
}
export default DeleteModal;