package com.bezkoder.springjwt.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.models.Membre;
import com.bezkoder.springjwt.exception.ResourceNotFoundException;
import com.bezkoder.springjwt.repository.MembreRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@PreAuthorize("hasRole('ADMIN')")
@RestController
@RequestMapping("/api/test/admin")
public class MembreController {
    @Autowired
    MembreRepository membreRepository;

    // get all membres
    @GetMapping("/membres")
    public List<Membre> getAllMembres() {
        return membreRepository.findAll();
    }

    // create Membre rest api
    @PostMapping("/membres")
    public Membre createMembre(@RequestBody Membre membre) {
        return membreRepository.save(membre);
    }

    // get membre by id rest api
	@GetMapping("/membres/{id}")
	public ResponseEntity<Membre> getMembreById(@PathVariable Long id) {
		Membre membre = membreRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("membre not exist with id :" + id));
		return ResponseEntity.ok(membre);
    }
    
	// update membre rest api
	
	@PutMapping("/membres/{id}")
	public ResponseEntity<Membre> updateMembre(@PathVariable Long id, @RequestBody Membre membreDetails){
		Membre membre = membreRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("membre not exist with id :" + id));
		
        membre.setNom(membreDetails.getNom());
        membre.setPrenom(membreDetails.getPrenom());
        membre.setAdresse1(membreDetails.getAdresse1());
        membre.setAdresse2(membreDetails.getAdresse2());
        membre.setProvince(membreDetails.getProvince());
        membre.setVille(membreDetails.getVille());
        membre.setCodepostal(membreDetails.getCodepostal());
        membre.setPays(membreDetails.getPays());
        membre.setEmail(membreDetails.getEmail());
        membre.setTel(membreDetails.getTel());
        membre.setCategorie(membreDetails.getCategorie());
        membre.setModepayement(membreDetails.getModepayement());
        membre.setLangue(membreDetails.getLangue());

		
		Membre updatedMembre = membreRepository.save(membre);
		return ResponseEntity.ok(updatedMembre);
	}
	
	// delete membre rest api
	@DeleteMapping("/membres/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteMembre(@PathVariable Long id){
		Membre membre = membreRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("membre not exist with id :" + id));
		
        membreRepository.delete(membre);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}