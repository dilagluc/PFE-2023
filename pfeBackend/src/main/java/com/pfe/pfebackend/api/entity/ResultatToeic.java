package com.pfe.pfebackend.api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table(name = "resultatToeic")
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class ResultatToeic {
    @Id
    @Column
    private Long studentNum;
    @Column
    private String score;
    @Column
    private Date date;
    @Column
    private String remarque;
}
