import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './style.css'

export default function TrangCN() {
    return (
        <Form className='form'>
            <h3 className='title'>THÔNG TIN CÁ NHÂN</h3>
            <FormGroup>
                <Label for="image">Ảnh đại diện:</Label>
            </FormGroup>
            <img src="https://taimienphi.vn/tmp/cf/aut/hinh-anh-cute-dep-de-thuong-nhat-1.jpg" width={200} height={200} class="rounded mx-auto d-block" alt="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" />
            <FormGroup>
                <Label for="name">Họ và tên:</Label>
                <Input type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
                <Label for="birthday">Ngày sinh:</Label>
                <Input type="date" name="birthday" id="birthday" />
            </FormGroup>
            <FormGroup tag="fieldset">
                <Label for="sex">Giới tính:</Label>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Nam
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Nữ
                    </Label>
                </FormGroup>
            </FormGroup>
            <FormGroup>
                <Label for="address">Địa chỉ:</Label>
                <Input type="text" name="address" id="address" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">Số điện thoại:</Label>
                <Input type="number" name="number" id="exampleNumber" />
            </FormGroup>
            <Button className='btn' color="primary">Lưu cập nhập</Button>{' '}
            <Button color="danger">Xóa tài khoản</Button>
        </Form>
    )
}