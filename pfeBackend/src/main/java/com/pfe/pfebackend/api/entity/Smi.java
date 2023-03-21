package com.pfe.pfebackend.api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "SMI")
@NoArgsConstructor
@Data
@AllArgsConstructor
@Builder
public class Smi {
    @Id
    @Column
    private Long studentNum;
    @Column
    private String remarque;
}
