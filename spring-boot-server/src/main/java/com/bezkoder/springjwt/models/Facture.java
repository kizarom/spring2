package com.bezkoder.springjwt.models;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "facture")
public class Facture {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotBlank
	@Size(max = 120)
    private String description;

    @NotBlank
	@DateTimeFormat
    private String date_em;
    
    @NotBlank
	@Size(max = 120)
    private String date_rec;
    
    private long montant;

    public Facture() {
    }

    public Facture(@NotBlank @Size(max = 120) String description, @NotBlank String date_em,
            @NotBlank @Size(max = 120) String date_rec,  @Size(max = 120) long montant) {
        this.description = description;
        this.date_em = date_em;
        this.date_rec = date_rec;
        this.montant = montant;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate_em() {
        return date_em;
    }

    public void setDate_em(String date_em) {
        this.date_em = date_em;
    }

    public String getDate_rec() {
        return date_rec;
    }

    public void setDate_rec(String date_rec) {
        this.date_rec = date_rec;
    }

    public long getMontant() {
        return montant;
    }

    public void setMontant(long montant) {
        this.montant = montant;
    }
    
}