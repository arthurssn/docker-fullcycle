FROM golang:1.22-alpine AS builder

WORKDIR /app

COPY . .

RUN go mod init hello
RUN go mod download
RUN go build -o main .

FROM scratch

COPY --from=builder /app/main /app/main

CMD ["/app/main"]