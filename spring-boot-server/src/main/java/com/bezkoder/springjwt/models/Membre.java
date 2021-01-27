package com.bezkoder.springjwt.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "membre")
public class Membre {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @NotBlank
	@Size(max = 20)
    private String nom;

    @NotBlank
	@Size(max = 20)
    private String prenom;
    
    @NotBlank
	@Size(max = 120)
    private String adresse1;
    
    @NotBlank
	@Size(max = 120)
    private String adresse2;
    
    @NotBlank
	@Size(max = 20)
    private String province;
    
    @NotBlank
	@Size(max = 20)
    private String ville;
    
    @NotBlank
	@Size(max = 20)
    private String codepostal;
    
    @NotBlank
	@Size(max = 20)
    private String pays;
    
    @NotBlank
	@Size(max = 50)
	@Email
    private String email;
    
    @NotBlank
	@Size(max = 120)
    private String tel;
    
    @NotBlank
	@Size(max = 120)
    private String categorie;
    
    @NotBlank
	@Size(max = 120)
    private String modepayement;
    
    @NotBlank
	@Size(max = 20)
    private String langue;

	@Size(max = 20)
	private String status = "passif";

    public Membre() {
    }

    public Membre(@NotBlank @Size(max = 20) String nom, @NotBlank @Size(max = 20) String prenom,
            @NotBlank @Size(max = 120) String adresse1, @NotBlank @Size(max = 120) String adresse2,
            @NotBlank @Size(max = 20) String province, @NotBlank @Size(max = 20) String ville,
            @NotBlank @Size(max = 20) String codepostal, @NotBlank @Size(max = 20) String pays,
            @NotBlank @Size(max = 50) @Email String email, @NotBlank @Size(max = 120) String tel,
            @NotBlank @Size(max = 120) String categorie, @NotBlank @Size(max = 120) String modepayement,
            @NotBlank @Size(max = 20) String langue) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse1 = adresse1;
        this.adresse2 = adresse2;
        this.province = province;
        this.ville = ville;
        this.codepostal = codepostal;
        this.pays = pays;
        this.email = email;
        this.tel = tel;
        this.categorie = categorie;
        this.modepayement = modepayement;
        this.langue = langue;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse1() {
        return adresse1;
    }

    public void setAdresse1(String adresse1) {
        this.adresse1 = adresse1;
    }

    public String getAdresse2() {
        return adresse2;
    }

    public void setAdresse2(String adresse2) {
        this.adresse2 = adresse2;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public String getCodepostal() {
        return codepostal;
    }

    public void setCodepostal(String codepostal) {
        this.codepostal = codepostal;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getModepayement() {
        return modepayement;
    }

    public void setModepayement(String modepayement) {
        this.modepayement = modepayement;
    }

    public String getLangue() {
        return langue;
    }

    public void setLangue(String langue) {
        this.langue = langue;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    
}