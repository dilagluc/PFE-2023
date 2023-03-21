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
@Table(name = "stageDecouverte")
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class StageDecouverte {
    @Id
    @Column
    private Long studentNum;
    @Column
    private String entreprise;
    @Column
    private Integer telEntreprise;
    @Column
    private String emailEntreprise;
    @Column
    private Integer duree;
    @Column
    private String sujet;
    @Column
    private String tuteur;
    @Column
    private Integer telTuteur;
    @Column
    private Date dateSoutenace;
    @Column
    private Integer creneauxSoutenance;
}
