dev: 
	docker build -t transparnterra:dev --force-rm . 
	docker run -p 80:80 -v /home/nazar91/Projects/freelance/TransparenTerra/app:/app -v /app/node_modules --rm —name transparnterra transparnterra:dev
stop: 
	docker stop