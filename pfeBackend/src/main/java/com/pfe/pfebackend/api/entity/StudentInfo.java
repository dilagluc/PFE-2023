package com.pfe.pfebackend.api.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table(name = "studentInfo")
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class StudentInfo {
    @Id
    @Column
    private Long studentNum;
    @Column(length = 65000)
    private String image;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private Date birthDate;
    @Column
    private String email1;
    @Column
    private String email2;
    @Column
    private String email3;
    @Column
    private String postalAddr;
    @Column
    private String tel1;
    @Column
    private String tel2;
    @Column
    private String tel3;
    @Column
    private String promotion;

}
