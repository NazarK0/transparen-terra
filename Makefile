dev: 
	docker build -t transparnterra:dev --force-rm .
	docker run -p 8080:80 -v $(PWD)/app:/app --rm --name "transparnterra" transparnterra:dev
app-console:
	docker exec -it transparnterra bash
stop: 
	docker stop transparnterra