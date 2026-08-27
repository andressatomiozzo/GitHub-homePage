package com.andressa.githubclone.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user")
    public ResponseEntity<?> getCurrentUser(
            @AuthenticationPrincipal OAuth2User principal,
            @RegisteredOAuth2AuthorizedClient("github") OAuth2AuthorizedClient authorizedClient) {
        
        System.out.println("Principal: " + principal);
        System.out.println("AuthorizedClient: " + authorizedClient);

        if (authorizedClient != null) {
            System.out.println("Token: " + authorizedClient.getAccessToken().getTokenValue());
        }

        if (principal == null) {
            return ResponseEntity.status(401).body("Usuário não autenticado");
        }

        Map<String, Object> response = new HashMap<>();
        response.put("user", principal.getAttributes());

        // Se o login foi feito pelo GitHub, extraímos o token de acesso
        if (authorizedClient != null) {
            response.put("accessToken", authorizedClient.getAccessToken().getTokenValue());
        }

        return ResponseEntity.ok(response);
    }
}