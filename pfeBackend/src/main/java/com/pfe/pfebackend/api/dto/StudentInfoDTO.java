package com.pfe.pfebackend.api.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class StudentInfoDTO {

    private Long studentNum;
    private String image;
    private String firstName;
    private String lastName;
    private Date birthDate;
    private String email1;
    private String email2;
    private String email3;
    private String postalAddr;
    private String tel1;
    private String tel2;
    private String tel3;
    private String promotion;
}
