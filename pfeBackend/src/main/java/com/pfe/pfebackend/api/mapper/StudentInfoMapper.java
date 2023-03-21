package com.pfe.pfebackend.api.mapper;

import com.pfe.pfebackend.api.dto.StudentInfoDTO;
import com.pfe.pfebackend.api.entity.StudentInfo;
import org.springframework.stereotype.Component;
@Component
public class StudentInfoMapper {
    public StudentInfo map(StudentInfoDTO dto) {
        return StudentInfo.builder()
                .studentNum(dto.getStudentNum())
                .birthDate(dto.getBirthDate())
                .email1(dto.getEmail1())
                .email2(dto.getEmail2())
                .email3(dto.getEmail3())
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .image(dto.getImage())
                .postalAddr(dto.getPostalAddr())
                .tel1(dto.getTel1())
                .tel2(dto.getTel2())
                .tel3(dto.getTel3())
                .promotion(dto.getPromotion())
                .build();
    }

    public StudentInfoDTO map(StudentInfo studentInfo) {
        return StudentInfoDTO.builder()
                .studentNum(studentInfo.getStudentNum())
                .birthDate(studentInfo.getBirthDate())
                .email1(studentInfo.getEmail1())
                .email2(studentInfo.getEmail2())
                .email3(studentInfo.getEmail3())
                .firstName(studentInfo.getFirstName())
                .lastName(studentInfo.getLastName())
                .image(studentInfo.getImage())
                .postalAddr(studentInfo.getPostalAddr())
                .tel1(studentInfo.getTel1())
                .tel2(studentInfo.getTel2())
                .tel3(studentInfo.getTel3())
                .promotion(studentInfo.getPromotion())
                .build();
    }
}
