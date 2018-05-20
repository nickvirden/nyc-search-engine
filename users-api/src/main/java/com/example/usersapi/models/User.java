package com.example.usersapi.models;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "USERS")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "USERNAME")
	private String userName;

	@Column(name = "EMAIL")
	private String email;

	@Column(name = "FIRST_NAME")
	private String firstName;

	@Column(name = "LAST_NAME")
	private String lastName;

	public User(String userName, String email, String firstName, String lastName) {
		this.userName = userName;
		this.email = email;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
